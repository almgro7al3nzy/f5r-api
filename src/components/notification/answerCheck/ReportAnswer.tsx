import React, { FC } from 'react';
import * as S from './style/index';

interface modalProps {
  content: string;
}

const ReportAnswer: FC<modalProps> = ({ content }) => {
  return (
    <S.Modal>
      <div>
        <h2>신고결과</h2>
        <div>{content}</div>
        <button>확인</button>
      </div>
    </S.Modal>
  );
};

export default ReportAnswer;
