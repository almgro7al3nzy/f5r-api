import React, { FC } from 'react';
import * as S from './style';
import { reportIcon, suggestionIcon } from '../../../assets/defalut';
import { Link } from 'react-router-dom';
import { Logo } from '../../logo';

const Sidebar: FC = () => {
  return (
    <S.Wrapper>
      <Logo />
      <S.Called>
        <Link to='/admin/report/feed'>
          <img src={reportIcon} alt='' />
          <p>신고상황</p>
        </Link>
        <Link to='/admin/question'>
          <img src={suggestionIcon} alt='' />
          <p>문의상황</p>
        </Link>
      </S.Called>
    </S.Wrapper>
  );
};

export default Sidebar;
