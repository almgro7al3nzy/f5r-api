import React, { FC } from 'react';
import * as S from './style';

interface Props {
  isLastMessage?: boolean;
  message: string;
}

const MyChat: FC<Props> = props => {
  const { isLastMessage, message } = props;
  return (
    <S.MyChat className='mine' isLastMessage={isLastMessage}>
      {message}
    </S.MyChat>
  );
};

export default MyChat;
