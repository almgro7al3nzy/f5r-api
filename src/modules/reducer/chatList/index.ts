import { chatListActionType } from '../../action/chatList';
import {
  CARROT_CHAT,
  CARROT_CHAT_FAILURE,
  CARROT_CHAT_SUCCESS,
  GROUP_CHAT,
  GROUP_CHAT_FAILURE,
  GROUP_CHAT_SUCCESS,
} from '../../action/chatList/interface';
import ChatListState from './interface';

const initState: ChatListState = {
  chatList: [],
  error: {
    status: 0,
    type: '',
    message: '',
  },
  isSuccessGetChatList: undefined,
};

const chatListReducer = (
  state: ChatListState = initState,
  action: chatListActionType,
): ChatListState => {
  switch (action.type) {
    case CARROT_CHAT:
      return {
        ...state,
        isSuccessGetChatList: undefined,
      };
    case CARROT_CHAT_SUCCESS:
      return {
        ...state,
        chatList: action.payload,
        isSuccessGetChatList: true,
      };
    case CARROT_CHAT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetChatList: false,
      };
    case GROUP_CHAT:
      return {
        ...state,
        isSuccessGetChatList: undefined,
      };
    case GROUP_CHAT_SUCCESS:
      return {
        ...state,
        chatList: action.payload,
        isSuccessGetChatList: true,
      };
    case GROUP_CHAT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetChatList: false,
      };
    default:
      return state;
  }
};

export default chatListReducer;
