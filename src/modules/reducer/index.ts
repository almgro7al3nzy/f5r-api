import { combineReducers } from 'redux';
import detailPostReducer from './detailPost';
import postReducer from './post';
import writePostReducer from './writerPost';
import chatListReducer from './chatList';
import {
  adminQuestionListReducer,
  adminReportPostListReducer,
  adminReportUserListReducer,
} from './admin';
import searchReducer from './search';
import detailChatReducer from './detailChat';

const rootReducer = combineReducers({
  post: postReducer,
  detailPost: detailPostReducer,
  adminQuestionList: adminQuestionListReducer,
  adminReportPostList: adminReportPostListReducer,
  adminReportUserList: adminReportUserListReducer,
  writePost: writePostReducer,
  chatList: chatListReducer,
  search: searchReducer,
  detailChat: detailChatReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
