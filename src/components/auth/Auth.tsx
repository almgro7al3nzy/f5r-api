import React, { useEffect, useState } from 'react';
import { Footer, Header } from '..';
import { authLogo } from '../../assets/auth';
import { Logo } from '../logo';
import * as S from './style';
import auth from '../../util/api/auth';

const Auth = () => {
  const [authLink, setAuthLink] = useState('');

  useEffect(() => {
    auth
      .getAuthLink()
      .then(res => {
        setAuthLink(res.data.link);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <S.Wrapper>
      <Header />
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.MainText>누구나 가입하기</S.MainText>
      <S.AuthLinkContainer href={authLink}>
        <S.Logo>
          <img src={authLogo} alt='' />
        </S.Logo>
        <p>DSM Auth로 시작하기</p>
      </S.AuthLinkContainer>
      <S.BottomTextContainer>
        <p>계속하면 DSM Auth의 개인정보 수집 이용에 동의하고</p>
        <p>
          DSM Auth의{' '}
          <a target='_blank' rel='noreferrer' href='https://semicolondsm.github.io/imformation/'>
            개인정보 처리방침
          </a>
          을(를) 읽었음을 확인하는 것입니다.
        </p>
      </S.BottomTextContainer>
      <Footer />
    </S.Wrapper>
  );
};

export default Auth;
