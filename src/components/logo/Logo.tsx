import React from 'react';
import * as S from './style';
import { chickLogo } from '../../assets/logo';

const Logo = () => {
  return (
    <S.Logo>
      <img src={chickLogo} alt='' />
      <div>
        <p>
          <span>누</span>구나
        </p>
        <p>
          <span>구</span>매하고
        </p>
        <p>
          <span>나</span>누자
        </p>
      </div>
    </S.Logo>
  );
};

export default Logo;
