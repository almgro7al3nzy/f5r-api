import { useEffect, useRef } from 'react';
import socketIO from 'socket.io-client';
import { socketResponse } from '../../../models/dto/response/detailChatResponse';
import useDetailChat from '../../../util/hooks/detailChat';

export const useSocket = () => {
  const socket = useRef<SocketIOClient.Socket>();
  const { setMessage } = useDetailChat().setState;
  const SOCKET_SEVER_URL = `https://server.tn1-dsm.com?Authorization=${localStorage.getItem(
    'access_token',
  )}`;

  useEffect(() => {
    socket.current = socketIO.connect(SOCKET_SEVER_URL, {
      transports: ['websocket'],
    });

    socket.current?.on('message', (response: socketResponse) => {
      setMessage({
        message_id: response.message_id,
        message: response.content,
        type: response.type,
        email: response.email,
        name: response.name,
        sent_at: response.sent_at,
      });
    });
  }, [socket, SOCKET_SEVER_URL]);

  return { socket } as const;
};
