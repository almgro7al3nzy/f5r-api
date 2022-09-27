import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

interface frameProps {
  listTitle: string;
  imgSrc: string;
  divType: string;
  postOp: string | number;
  userOp: string | number;
}

const Frame: FC<frameProps> = ({ listTitle, imgSrc, divType, postOp, userOp }) => {
  return (
    <S.Top>
      <div>
        <img src={imgSrc} alt='icon' />
        <h1>{listTitle}</h1>
      </div>
      <div style={{ display: divType }}>
        <Link to='/admin/report/feed'>
          <p style={{ opacity: postOp }}>게시물 신고</p>
        </Link>
        <Link to='/admin/report/user'>
          <p style={{ opacity: userOp }}>유저 신고</p>
        </Link>
      </div>
    </S.Top>
  );
};

export default Frame;
