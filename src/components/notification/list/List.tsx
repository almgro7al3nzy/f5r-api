import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { chat_icon, question_icon, report_icon, tag_icon } from '../../../assets/alarm/index';
import notiCheck from '../../../util/api/notificate';
import Answer from '../answerCheck/Answer';
import { useHistory } from 'react-router';

interface listProps {
  notification_id: number;
  title: string;
  message: string;
  content: string | number;
  watch: boolean;
  ref?: any;
}

const List = React.forwardRef((props: listProps, ref: any) => {
  const { notification_id, title, message, content, watch } = props;
  const [icon, setIcon] = useState<string>('');
  const [modalShow, setModalShow] = useState<boolean>(false);
  const accessToken = localStorage.getItem('access_token');
  const history = useHistory();

  useEffect(() => {
    switch (title) {
      case '신고':
        setIcon(report_icon);
        break;
      case '채팅':
        setIcon(chat_icon);
        break;
      case '문의':
        setIcon(question_icon);
        break;
      case '태그':
        setIcon(tag_icon);
        break;
    }
  }, []);

  const onCheck = () => {
    notiCheck
      .setNotiCheck(accessToken, notification_id)
      .then(res => {
        if (title == '문의' || title == '신고') {
          showModal();
        } else {
          history.go(0);
        }
      })
      .catch(err => {
        throw err;
      });
  };

  const showModal = () => {
    setModalShow(!modalShow);
    if (modalShow == true) {
      history.go(0);
    }
  };

  return (
    <>
      <S.List ref={ref} onClick={() => onCheck()}>
        <div>
          <div style={{ backgroundColor: watch ? 'transparent' : ' #3D50FF' }} />
        </div>
        <div>
          <div>
            <img src={icon} alt='' />
          </div>
          <div>
            <span>{title}</span>
            <p>{message}</p>
          </div>
        </div>
      </S.List>
      <Answer isShow={modalShow} modalTitle={title} show={showModal} id={content} />
    </>
  );
});

export default List;
