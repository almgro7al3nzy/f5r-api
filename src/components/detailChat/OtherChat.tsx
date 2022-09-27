import React, { FC, useMemo } from 'react';
import * as S from './style';

interface Props {
  isLastMessage?: boolean;
  name?: string;
  message: string;
}

const OtherChat: FC<Props> = props => {
  const { isLastMessage, name, message } = props;

  const userName = useMemo(() => {
    return <S.ChatName className='other'>{name}</S.ChatName>;
  }, [name]);

  return (
    <>
      {userName}
      <S.OtherChat className='other' isLastMessage={isLastMessage}>
        {message}
      </S.OtherChat>
    </>
  );
};

export default OtherChat;
