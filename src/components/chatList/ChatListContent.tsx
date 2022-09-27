import React, { FC, useMemo } from 'react';
import { useHistory } from 'react-router';
import { people } from '../../assets/chat';
import useDetailChat from '../../util/hooks/detailChat';
import * as S from './style';

interface Props {
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
  roomName: string;
  lastMessage: string;
  photoUrl: string;
  roomId: number;
  count?: number;
  type: string;
}

const ChatListContent: FC<Props> = props => {
  const { roomName, lastMessage, count, photoUrl, roomId, type, socket } = props;
  const history = useHistory();
  const setPage = useDetailChat().setState.setPage;

  const showPeople = useMemo(() => {
    if (count)
      return (
        <S.People>
          <img src={people} alt='people' />
          <p>{count}</p>
        </S.People>
      );
  }, [count]);

  const chatListClickHandler = () => {
    socket.current?.emit('unsubscribe-all');
    if (type === 'trade') {
      history.push(`/chat/trade/${roomId}`);
      setPage(0);
    } else if (type === 'group') {
      history.push(`/chat/group/${roomId}`);
      setPage(0);
    }
  };

  return (
    <S.ChatListContent onClick={chatListClickHandler}>
      <S.ChatImg src={photoUrl} />
      <div>
        {showPeople}
        <S.ChatTitle>{roomName ? roomName : '알 수 없음'}</S.ChatTitle>
        <S.ChatContent>{lastMessage}</S.ChatContent>
      </div>
    </S.ChatListContent>
  );
};

export default ChatListContent;
