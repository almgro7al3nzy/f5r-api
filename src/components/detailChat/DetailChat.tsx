import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';
import { useLocation, useParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Chats from './Chats';
import { detailChatResponse } from '../../models/dto/response/detailChatResponse';

interface Props {
  page: number;
  chatContent: Array<detailChatResponse>;
  accountNumber: string;
  roomName: string;
  count: number;
  isHaveNextPage: boolean;
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
  isSuccessGetInfo: boolean | undefined;
  setPage: (payload: number) => void;
  setMessage: (payload: detailChatResponse) => void;
}

const DetailChat: FC<Props> = props => {
  const { chatContent } = props;
  const [isClickSettingBtn, setIsClickSettingBtn] = useState(false);
  const [isClickMore, setIsClickMore] = useState(false);
  const type = useLocation().pathname.slice(6, 11);
  const { id } = useParams<{ id: string }>();
  const contentBox = document.getElementById('contentBox') as HTMLDivElement;

  useEffect(() => {
    if (contentBox && !isClickMore) contentBox.scrollTo(0, contentBox.scrollHeight);
  }, [chatContent]);

  return (
    <>
      <Header type={type} id={id} {...props} />
      <S.DetailChat>
        <S.ContentBox id='contentBox'>
          <Chats {...props} setIsClickMore={setIsClickMore} />
        </S.ContentBox>
      </S.DetailChat>
      <Footer
        id={id}
        isClickSettingBtn={isClickSettingBtn}
        setIsClickSettingBtn={setIsClickSettingBtn}
        setIsClickMore={setIsClickMore}
        {...props}
      />
    </>
  );
};

export default DetailChat;
