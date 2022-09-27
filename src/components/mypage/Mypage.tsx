import React, { useEffect, useState } from 'react';
import { PROFILE_ELEMENT } from '../../constance/mypage';
import { login_icon, logout_icon, suggestion } from '../../assets/mypage/index';
import Footer from '../footer';
import Header from '../header';
import * as S from './style';
import Template from '../default/modal/modalTemplate';
import mypage from '../../util/api/mypage';
import { useHistory } from 'react-router';

const Mypage = () => {
  const [isHideAccount, setIsHideAccount] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [informations, setInformations] = useState({
    name: '',
    gcn: '',
    room_number: '',
    account_number: '',
    hide_account: false,
  });
  const { name, gcn, room_number, account_number } = informations;
  const { getMyInfo, setHideAccount, unsetHideAccount, deleteToken } = mypage;
  const { push } = useHistory();

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  useEffect(() => {
    getMyInfo()
      .then(res => {
        setIsLogin(true);
        const { name, gcn, room_number, account_number, hide_account } = res.data;
        setInformations({
          ...informations,
          name,
          gcn,
          room_number: room_number + '호',
          account_number,
          hide_account,
        });
        setIsHideAccount(hide_account);
      })
      .catch(err => {
        throw err;
      });
  }, []);

  const hideAccount = () => {
    setIsHideAccount(!isHideAccount);
    if (isHideAccount) {
      unsetHideAccount()
        .then(res => {})
        .catch(err => {
          throw err;
        });
    } else {
      setHideAccount()
        .then(res => {})
        .catch(err => {
          throw err;
        });
    }
  };

  const logout = () => {
    if (window.confirm('로그아웃하시겠습니까?')) {
      deleteToken()
        .then(res => {
          localStorage.clear();
          push('/auth');
        })
        .catch(err => {
          alert('로그아웃에 실패했습니다.');
          throw err;
        });
    }
  };

  const login = () => {
    alert('로그인 페이지로 이동합니다.');
    push('/auth');
  };

  return (
    <S.Wrapper>
      <Header />
      <S.UserInfoBox>
        <S.StudentInfo>
          <span>{isLogin ? name : '로그인을 해주세요.'}</span>
          <span>{gcn}</span>
        </S.StudentInfo>
        <S.DormitoryInfo>
          <span>호실</span>
          <span>{room_number}</span>
        </S.DormitoryInfo>
        <S.AccountBox>
          <S.AccountInfo isHideAccount={isHideAccount}>
            <span>계좌번호</span>
            <span>{account_number}</span>
            {isHideAccount && <span>* 계좌번호가 다른 사람에게 보이지 않습니다.</span>}
          </S.AccountInfo>
          <S.AccountCheckbox>
            <input
              id='hide_account'
              type='checkbox'
              checked={isHideAccount}
              onChange={hideAccount}
            />
            <label htmlFor='hide_account'>계좌번호 숨기기</label>
          </S.AccountCheckbox>
        </S.AccountBox>
      </S.UserInfoBox>
      {isLogin &&
        PROFILE_ELEMENT.map(ele => {
          return (
            <S.DetailPage key={ele.id} to={`/mypage${ele.path}`}>
              <img src={ele.img} alt='' />
              <span>{ele.text}</span>
            </S.DetailPage>
          );
        })}
      {isLogin && (
        <S.Suggestion onClick={openModal}>
          <img src={suggestion} alt='' />
          <span>문의사항 작성하기</span>
        </S.Suggestion>
      )}
      {isLogin ? (
        <S.Access onClick={logout}>
          <img src={logout_icon} alt='' />
          <span>로그아웃하기</span>
        </S.Access>
      ) : (
        <S.Access onClick={login}>
          <img src={login_icon} alt='' />
          <span>로그인하기</span>
        </S.Access>
      )}
      <Footer />
      <Template subject='문의사항' isShowModal={isShowModal} closeModal={closeModal} />
    </S.Wrapper>
  );
};

export default Mypage;
