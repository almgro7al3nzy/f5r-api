import React, { FC } from 'react';
import * as S from './style';
import OtherChat from './OtherChat';
import MyChat from './MyChat';
import { detailChatResponse } from '../../models/dto/response/detailChatResponse';

interface Props {
  page: number;
  chatContent: Array<detailChatResponse>;
  setIsClickMore: React.Dispatch<React.SetStateAction<boolean>>;
  isHaveNextPage: boolean;
  setPage: (payload: number) => void;
}

const Chats: FC<Props> = props => {
  const { chatContent, setPage, page, isHaveNextPage, setIsClickMore } = props;
  const myEmail = localStorage.getItem('email');

  const moreBtnClickHandler = () => {
    setIsClickMore(true);
    setPage(page + 1);
  };

  return (
    <S.Chats>
      {isHaveNextPage && <S.MoreBtn onClick={moreBtnClickHandler}>더보기</S.MoreBtn>}
      {chatContent.map((data: detailChatResponse, i) => {
        if (data.type === 'JOIN') return <S.JoinMessage>{data.message}</S.JoinMessage>;
        else if (data.type === 'LEAVE') return <S.JoinMessage>{data.message}</S.JoinMessage>;
        else {
          if (data.email === myEmail) {
            return (
              <MyChat
                key={i}
                message={data.message}
                isLastMessage={
                  chatContent[i + 1] && chatContent[i + 1].email === myEmail ? false : true
                }
              />
            );
          } else
            return (
              <OtherChat
                key={data.message_id}
                message={data.message}
                isLastMessage={
                  chatContent[i + 1] && chatContent[i + 1].email === data.email ? false : true
                }
                name={
                  chatContent[i - 1] &&
                  chatContent[i - 1].type === 'SEND' &&
                  chatContent[i - 1].email === data.email
                    ? undefined
                    : data.name !== null
                    ? data.name
                    : '알 수 없음'
                }
              />
            );
        }
      })}
    </S.Chats>
  );
};

export default Chats;
