import React, { FC } from 'react';
import * as S from './style/index';

interface modalProps {
  content: string;
}

const QuestionAnswer: FC<modalProps> = ({ content }) => {
  return (
    <S.Modal>
      <div>
        <h2>문의답변</h2>
        <div>{content}</div>
        <button>확인</button>
      </div>
    </S.Modal>
  );
};

export default QuestionAnswer;
