import { detailChatActionType } from '../../action/detailChat';
import {
  CHAT_CONTENT,
  CHAT_CONTENT_FAILURE,
  CHAT_CONTENT_SUCCESS,
  ROOM_ID,
  PAGE,
  MESSAGE,
  GET_INFO_SUCCESS,
  GET_INFO_FAILURE,
  GET_CHAT_INFO_SUCCESS,
  GET_CHAT_INFO_FAILURE,
  GET_INFO,
} from '../../action/detailChat/interface';
import DetailChatState from './interface';

const initState: DetailChatState = {
  chatContent: [],
  page: 0,
  roomId: '',
  roomName: '',
  count: 0,
  roomNumber: '',
  accountNumber: '',
  error: {
    status: 0,
    type: '',
    message: '',
  },
  isSuccessGetDetailChat: undefined,
  isHaveNextPage: true,
  isSuccessGetInfo: undefined,
};

const detailChatReducer = (
  state: DetailChatState = initState,
  action: detailChatActionType,
): DetailChatState => {
  switch (action.type) {
    case CHAT_CONTENT:
      if (state.page === 0)
        return {
          ...state,
          isSuccessGetDetailChat: undefined,
          isHaveNextPage: true,
          chatContent: [],
        };
      else
        return {
          ...state,
          isSuccessGetDetailChat: undefined,
        };
    case CHAT_CONTENT_SUCCESS:
      if (action.payload.length !== 0)
        return {
          ...state,
          chatContent: action.payload.reverse().concat(state.chatContent),
          isSuccessGetDetailChat: true,
        };
      else
        return {
          ...state,
          isHaveNextPage: false,
        };
    case CHAT_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetDetailChat: false,
      };
    case ROOM_ID:
      return {
        ...state,
        roomId: action.payload,
      };
    case PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case MESSAGE:
      return {
        ...state,
        chatContent: state.chatContent.concat([action.payload]),
      };
    case GET_INFO:
      return {
        ...state,
        isSuccessGetInfo: undefined,
      };
    case GET_INFO_SUCCESS:
      return {
        ...state,
        roomNumber: action.payload.room_number,
        accountNumber: action.payload.account_number,
        isSuccessGetInfo: true,
      };
    case GET_INFO_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetInfo: false,
      };
    case GET_CHAT_INFO_SUCCESS:
      return {
        ...state,
        roomName: action.payload.room_name,
        count: action.payload.count,
      };
    case GET_CHAT_INFO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default detailChatReducer;
