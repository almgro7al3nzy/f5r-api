import React, { FC, useMemo } from 'react';
import * as S from './style';
import { reportIcon } from '../../assets/detailPost';
import PostImgSlider from './PostImgSlider';
import DetailPostFooter from './DetailPostFooter';
import { CHAT, REPORT } from '../../constance/detailPost';
import { useHistory, useParams } from 'react-router';
import useDetailChat from '../../util/hooks/detailChat';

interface Props {
  title: string;
  tags: Array<string>;
  description: string;
  price: number;
  count: number;
  headCount: number;
  currentHeadCount: number;
  date: string;
  isUsedItem: boolean;
  like: boolean;
  photo: Array<string>;
  userInfo: { writerEmail: string; writerName: string };
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
  setRoomId: (payload: string) => void;
  setIsReportModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailContent: FC<Props> = props => {
  const {
    title,
    tags,
    userInfo,
    description,
    price,
    count,
    headCount,
    currentHeadCount,
    date,
    like,
    photo,
    isUsedItem,
    socket,
    setRoomId,
    setIsReportModal,
  } = props;
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const setPage = useDetailChat().setState.setPage;

  const makeDates = useMemo(() => {
    const month = date && date.slice(5, 7);
    const dates = date && date.slice(8);
    return `${month}/${dates}`;
  }, [date]);

  const type = useMemo(() => {
    if (isUsedItem) return 'trade';
    else return 'group';
  }, [isUsedItem]);

  const chattingBtnClickHandler = () => {
    socket.current?.emit('join', id);
    socket.current?.on('room', (room_id: string) => {
      setRoomId(room_id);
      history.push(`/chat/${type}/${room_id}`);
      setPage(0);
    });
    socket.current?.on('error', (response: { status: number; message: string }) => {
      if (response.status === 400 && response.message === 'Its your feed.')
        alert('게시글의 작성자입니다!');
      else if (response.status === 409 && response.message === 'Already join room.')
        alert('이미 해당 게시글의 채팅에 참여하였습니다.');
    });
  };

  const chattingBtn = useMemo(() => {
    if (localStorage.getItem('access_token'))
      return (
        <S.ChattingBtn onClick={chattingBtnClickHandler}>
          <p>{CHAT}</p>
        </S.ChattingBtn>
      );
  }, [localStorage.getItem('access_token')]);

  const openReportModal = () => {
    setIsReportModal(true);
  };

  const profileLinkHandler = () => {
    history.push(`/profile/${userInfo.writerEmail}`);
  };

  return (
    <>
      <S.DetailContent>
        <S.TitleLine>
          <S.PostTitle>{title}</S.PostTitle>
          <S.Report onClick={openReportModal}>
            <S.ReportIcon src={reportIcon} />
            <p>{REPORT}</p>
          </S.Report>
        </S.TitleLine>
        <S.HashTageLine>
          {tags &&
            tags.map((data: string, i: number) => {
              return (
                <S.HashTag key={i}>
                  <p>{data}</p>
                </S.HashTag>
              );
            })}
        </S.HashTageLine>
        <S.UserInfoAndChatLine>
          <div onClick={profileLinkHandler}>
            <p>{userInfo.writerName}</p>
            <p>{userInfo.writerEmail}</p>
          </div>
          {chattingBtn}
        </S.UserInfoAndChatLine>
        <PostImgSlider photo={photo} />
        <S.PostContent>{description}</S.PostContent>
      </S.DetailContent>
      <DetailPostFooter
        type={type}
        money={price}
        heart={count}
        date={makeDates}
        like={like}
        people={`${currentHeadCount}/${headCount}`}
      />
    </>
  );
};

export default DetailContent;
