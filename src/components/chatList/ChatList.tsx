import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header';
import Footer from '../footer';
import { ALRAMTITLE, GROUPTOGGLE, TRADETOGGLE } from '../../constance/chatList';
import { bellRing, bellNoRing } from '../../assets/chat';
import TradeChatList from './TradeChatList';
import GroupChatList from './GroupChatList';
import { useDispatch } from 'react-redux';
import { CARROT_CHAT, GROUP_CHAT } from '../../modules/action/chatList/interface';
import { chatListResponseType } from '../../models/dto/response/chatListResponse';
import ringGet from '../../util/api/chatNoti';
import ringPost from '../../util/api/chatNoti';
import ringDelete from '../../util/api/chatNoti';
import { useHistory } from 'react-router';

interface Props {
  chatList: Array<chatListResponseType>;
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
}

const ChatList: FC<Props> = props => {
  const history = useHistory();
  const accessToken = localStorage.getItem('access_token');
  const [ring, setRing] = useState<boolean>(true);
  const [isClick, setIsClick] = useState({ trade: true, group: false });
  const { chatList, socket } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CARROT_CHAT });
    socket.current?.emit('subscribe-all', 'CARROT');
    getRing();
  }, []);

  const tradeBtnClickEvent = () => {
    socket.current?.emit('unsubscribe-all');
    setIsClick({ trade: true, group: false });
    dispatch({ type: CARROT_CHAT });
    socket.current?.emit('subscribe-all', 'CARROT');
  };

  const groupBtnClickEvent = () => {
    socket.current?.emit('unsubscribe-all');
    setIsClick({ trade: false, group: true });
    dispatch({ type: GROUP_CHAT });
    socket.current?.emit('subscribe-all', 'GROUP');
  };

  const chatLists = useMemo(() => {
    if (isClick.trade) return <TradeChatList chatList={chatList} socket={socket} />;
    else if (isClick.group) return <GroupChatList chatList={chatList} socket={socket} />;
  }, [isClick, chatList]);

  const getRing = () => {
    ringGet
      .setRingGet(accessToken)
      .then(res => {
        setRing(res.data.notification);
      })
      .catch(err => {
        throw err;
      });
  };

  const onclickBell = () => {
    ring
      ? ringDelete
          .setRingDelete(accessToken)
          .then(res => {
            history.go(0);
          })
          .catch(err => {
            throw err;
          })
      : ringPost
          .setRingPost(accessToken)
          .then(res => {
            history.go(0);
          })
          .catch(err => {
            throw err;
          });
  };

  return (
    <>
      <Header />
      <S.ChatList>
        <S.AlarmLine>
          <p>{ALRAMTITLE}</p>
          <img src={ring ? bellRing : bellNoRing} alt='bell' onClick={onclickBell} />
        </S.AlarmLine>
        <S.ToggleLine>
          <S.ToggleBtn isClick={isClick.trade} onClick={tradeBtnClickEvent}>
            <p>{TRADETOGGLE}</p>
          </S.ToggleBtn>
          <S.ToggleBtn isClick={isClick.group} onClick={groupBtnClickEvent}>
            <p>{GROUPTOGGLE}</p>
          </S.ToggleBtn>
        </S.ToggleLine>
        {chatLists}
      </S.ChatList>
      <Footer />
    </>
  );
};

export default ChatList;
