import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Auth,
  Callback,
  Information,
  Mypage,
  UserInfo,
  Main,
  Noti,
  TagRegister,
  Home,
} from '../components';
import { ModifyInfo, LikedPost, WrittenPost } from '../components/mypage/mypageOptions';
import {
  PostContanier,
  DetailPostContainer,
  WritePostContainer,
  ChatListContainer,
  DetailChatContainer,
  SearchContainer,
  QuestionContainer,
  ReportPostContainer,
  ReportUserContainer,
} from '../container';
import { useSocket } from '../util/hooks/socket/useSocket';

const MainRouter = () => {
  const { socket } = useSocket();

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/mypage' component={Mypage} />
        <Route exact path='/mypage/modify' component={ModifyInfo} />
        <Route exact path='/mypage/liked_post' component={LikedPost} />
        <Route exact path='/mypage/written_post' component={WrittenPost} />
        <Route exact path='/profile/:email' component={UserInfo} />
        <Route exact path='/post' component={PostContanier} />
        <Route exact path='/view/post/:id' render={() => <DetailPostContainer socket={socket} />} />
        <Route exact path='/write/post/:type' component={WritePostContainer} />
        <Route exact path='/chatting' render={() => <ChatListContainer socket={socket} />} />
        <Route exact path='/admin/report/feed' component={ReportPostContainer} />
        <Route exact path='/admin/report/user' component={ReportUserContainer} />
        <Route exact path='/admin/question' component={QuestionContainer} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/callback' component={Callback} />
        <Route exact path='/auth/information' component={Information} />
        <Route
          exact
          path='/chat/:type/:id'
          render={() => <DetailChatContainer socket={socket} />}
        />
        <Route exact path='/search' component={SearchContainer} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/noti/list' component={Noti} />
        <Route exact path='/noti/tag' component={TagRegister} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
