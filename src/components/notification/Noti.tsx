import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';
import { exit_icon } from '../../assets/alarm/index';
import { List } from './list/index';
import listGet from '../../util/api/notificate';
import { useInView } from 'react-intersection-observer';
import { useHistory } from 'react-router';
import firebase from 'firebase/compat/app';
import { getMessaging, getToken } from 'firebase/messaging';

const Noti = () => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SANDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  const app = firebase.initializeApp(firebaseConfig);
  const messaging = getMessaging(app);

  Notification.requestPermission()
    .then(function (permission) {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.log('Unable to get permission to notify.');
      }
    })
    .catch(function (err) {
      console.log('fcm에러 : ', err);
    });

  getToken(messaging, {
    vapidKey: process.env.REACT_APP_FIREBASE_VAPI_KEY,
  })
    .then(currentToken => {
      if (currentToken) {
        console.log(currentToken);
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch(err => {
      console.log('An error occurred while retrieving token. ', err);
    });

  const accessToken = localStorage.getItem('access_token');
  const history = useHistory();

  const [list, setList] = useState<Array<any>>([]);
  const [lastCheck, setLastCheck] = useState<boolean>();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const getList = useCallback(async () => {
    setLoading(true);
    await listGet
      .setListGet(accessToken, page)
      .then(res => {
        if (res.data.length === 0) {
          setLastCheck(true);
        }
        setList(prevState => [...prevState, ...res.data]);
      })
      .catch(err => {
        history.push('/auth');
        alert('로그인을 해주세요.');
        throw err;
      });
    setLoading(false);
  }, [page]);

  useEffect(() => {
    getList();
  }, [page]);

  useEffect(() => {
    if (inView && !loading && !lastCheck) {
      setPage(prevState => prevState + 1);
    }
  }, [inView, loading]);

  return (
    <S.Wrapper>
      <S.AlarmHeader>
        <div>
          <img
            src={exit_icon}
            alt=''
            onClick={() => {
              history.goBack();
            }}
          />
        </div>
        <h2>알람</h2>
        <div
          onClick={() => {
            history.push('/noti/tag');
          }}
        >
          태그등록
        </div>
      </S.AlarmHeader>
      {list.map((listItem: any, idx: number) => {
        return list.length - 1 == idx ? (
          <List
            notification_id={listItem.notification_id}
            title={listItem.title}
            message={listItem.message}
            content={listItem.content}
            watch={listItem.watch}
            ref={ref}
          />
        ) : (
          <List
            notification_id={listItem.notification_id}
            title={listItem.title}
            message={listItem.message}
            content={listItem.content}
            watch={listItem.watch}
          />
        );
      })}
    </S.Wrapper>
  );
};

export default Noti;
