import React, { FC, useMemo } from 'react';
import * as S from './style';
import { prev } from '../../assets/chat';
import { useHistory } from 'react-router';

interface Props {
  id: string;
  type: string;
  roomName: string;
  count: number;
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
}

const Header: FC<Props> = props => {
  const { type, socket, id, roomName, count } = props;
  const history = useHistory();

  const people = useMemo(() => {
    if (type === 'group') return <span>{count}</span>;
    else return;
  }, [type, count]);

  const prevBtnClickHandler = () => {
    history.push('/chatting');
    socket.current?.emit('unsubscribe', id);
  };

  return (
    <S.Header>
      <S.HeaderWrapper>
        <img src={prev} alt='prev' onClick={prevBtnClickHandler} />
        <p>{roomName ? roomName : '알 수 없음'}</p>
        {people}
      </S.HeaderWrapper>
    </S.Header>
  );
};

export default Header;
