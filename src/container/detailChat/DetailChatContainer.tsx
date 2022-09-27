import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import DetailChat from '../../components/detailChat';
import { CHAT_CONTENT, GET_CHAT_INFO } from '../../modules/action/detailChat/interface';
import useDetailChat from '../../util/hooks/detailChat';

interface Props {
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
}

const DetailChatContainer: FC<Props> = props => {
  const { socket } = props;
  const dispatch = useDispatch();
  const { state, setState } = useDetailChat();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setState.setRoomId(id);
    dispatch({ type: CHAT_CONTENT });
  }, [state.page, id]);

  useEffect(() => {
    socket.current?.emit('subscribe', id);
    dispatch({ type: GET_CHAT_INFO });
  }, [state.roomId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailChat socket={socket} {...state} {...setState} />
    </Suspense>
  );
};

export default DetailChatContainer;
