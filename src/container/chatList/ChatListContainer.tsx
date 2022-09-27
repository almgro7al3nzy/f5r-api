import React, { FC, Suspense, useEffect } from 'react';
import { useHistory } from 'react-router';
import ChatList from '../../components/chatList';
import useChatList from '../../util/hooks/chatList';

interface Props {
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
}

const ChatListContainer: FC<Props> = props => {
  const { state, setState } = useChatList();
  const { socket } = props;
  const history = useHistory();

  useEffect(() => {
    if (state.error.status === 401 || state.error.status === 403) {
      alert('로그인이 필요합니다');
      history.push('/auth');
    }
  }, [state.error]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatList {...state} {...setState} socket={socket} />
    </Suspense>
  );
};

export default ChatListContainer;
