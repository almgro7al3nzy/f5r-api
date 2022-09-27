/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import queryString from 'query-string';
import * as S from './style';
import callback from '../../util/api/callback';
import { useHistory } from 'react-router';

const Callback = ({ location }: any) => {
  const query = queryString.parse(location.search);
  const { code } = query;
  const { push } = useHistory();

  useEffect(() => {
    code &&
      callback
        .auth(code)
        .then(res => {
          localStorage.setItem('access_token', res.data['access_token']);
          localStorage.setItem('refresh_token', res.data['refresh_token']);
          localStorage.setItem('email', res.data['email']);
          switch (res.status) {
            case 200:
              push('/main');
              break;
            case 201:
              push('/auth/information');
          }
        })
        .catch(err => {
          switch (err.response.status) {
            case 403:
              alert('코드가 만료되었습니다. 다시 로그인해주세요.');
              push('/auth');
              break;
            default:
              console.log(err);
          }
        });
  }, []);

  return <S.Wrapper>로딩 중...</S.Wrapper>;
};

export default Callback;
