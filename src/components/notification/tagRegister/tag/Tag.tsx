import React, { FC } from 'react';
import * as S from './style';

interface tagProps {
  tag: string;
}

const Tag: FC<tagProps> = ({ tag }) => {
  return (
    <S.Tag>
      <span>#{tag}</span>
    </S.Tag>
  );
};

export default Tag;
