import React, { useCallback, useEffect, useState } from 'react';
import { reportIcon } from '../../assets/detailPost';
import ModalTemplate from '../default/modal/modalTemplate';
import { Header, Footer } from '../index';
import * as S from './style';
import userInfo from '../../util/api/userInfo';
import mypage from '../../util/api/mypage';
import { useInView } from 'react-intersection-observer';
import PostContent from '../post/PostContent';

const UserInfo = ({ match }: any) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [userInfos, setUserInfos] = useState({
    name: '',
    gcn: '',
    email: '',
    room_number: '',
    account_number: '',
  });
  const { name, gcn, email, room_number, account_number } = userInfos;
  const { getUserInfo } = userInfo;
  const { getUserPost } = mypage;

  const [postType, setPostType] = useState('trade');
  const [list, setList] = useState<Array<any>>([]);
  const [lastCheck, setLastCheck] = useState<boolean>();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const getList = useCallback(async () => {
    setLoading(true);
    setLastCheck(false);
    await getUserPost(match.params.email, page, postType)
      .then(res => {
        if (res.data.length === 0) {
          setLastCheck(true);
        }
        setList(prevState => [...prevState, ...res.data]);
      })
      .catch(err => {
        throw err;
      });
    setLoading(false);
  }, [page, postType]);

  useEffect(() => {
    getList();
  }, [page, postType]);

  useEffect(() => {
    setList([]);
    setPage(0);
    window.scrollTo({
      top: 0,
    });
  }, [postType]);

  useEffect(() => {
    if (inView && !loading && !lastCheck) {
      setPage(prevState => prevState + 1);
    }
  }, [inView, loading]);

  const setCarrot = () => {
    setPostType('trade');
  };

  const setGroup = () => {
    setPostType('group');
  };

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  useEffect(() => {
    getUserInfo(match.params.email)
      .then(res => {
        const { name, gcn, email, room_number, account_number } = res.data;
        setUserInfos({
          name,
          gcn,
          email,
          room_number,
          account_number,
        });
      })
      .catch(err => {
        if (err.response.status === 401) {
          alert('로그인 후 이용 가능합니다.');
          window.location.href = 'auth';
        }
        throw err;
      });
  }, []);

  return (
    <S.Wrapper>
      <Header />
      <S.UserInfoBox>
        <S.StudentInfoBox>
          <S.StudentInfo>
            <span>{name || '존재하지 않는 유저입니다'}</span>
            <span>{gcn}</span>
          </S.StudentInfo>
          {name && (
            <S.ReportButton onClick={openModal}>
              <img src={reportIcon} alt='' />
              <span>신고하기</span>
            </S.ReportButton>
          )}
        </S.StudentInfoBox>
        <S.DormitoryInfo>
          <span>{name && '호실'}</span>
          <span>{`${room_number}호`}</span>
        </S.DormitoryInfo>
        <S.AccountInfo>
          <span>{name && '계좌번호'}</span>
          <span>{account_number || '계좌번호를 공개하지 않은 유저입니다.'}</span>
        </S.AccountInfo>
      </S.UserInfoBox>
      <S.WrittenPostBox>
        <span>{name && '작성한 게시물'}</span>
        <S.ListWrapper>
          <S.TypeSelector postType={postType}>
            <p onClick={setCarrot}>거래</p>
            <p onClick={setGroup}>공구</p>
          </S.TypeSelector>
          {list.map(ele => {
            const month = ele.date && ele.date.slice(5, 7);
            const date = ele.date && ele.date.slice(8);
            const dates = `${month}/${date}`;
            const showPeople = `${ele.current_head_count}/${ele.head_count}`;
            return (
              <PostContent
                key={ele.feed_id}
                feedId={ele.feed_id}
                medium={ele.medium}
                title={ele.title}
                money={ele.price}
                like={ele.count}
                type={postType}
                date={dates}
                people={showPeople}
                hashtag={ele.tags}
                isLikeClick={ele.like}
              />
            );
          })}
          {!loading && <p ref={ref}>로딩 중...</p>}
        </S.ListWrapper>
      </S.WrittenPostBox>

      <Footer />
      <ModalTemplate
        subject='신고하기'
        isShowModal={isShowModal}
        closeModal={closeModal}
        id={email}
      />
    </S.Wrapper>
  );
};

export default UserInfo;
