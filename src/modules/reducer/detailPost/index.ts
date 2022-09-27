import { detailPostActionType } from '../../action/detailPost';
import {
  FEED_ID,
  ROOM_ID,
  GET_POST,
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
  POST_DELETE,
  POST_DELETE_FAILURE,
  POST_DELETE_SUCCESS,
  POST_LIKE,
  POST_LIKE_DELETE,
  POST_LIKE_DELETE_FAILURE,
  POST_LIKE_DELETE_SUCCESS,
  POST_LIKE_FAILURE,
  POST_LIKE_SUCCESS,
} from '../../action/detailPost/interface';
import DetailPostState from './interface';

const initState: DetailPostState = {
  feedId: 0,
  roomId: '0',
  title: '',
  description: '',
  price: 0,
  tags: [],
  photo: [],
  lastModifyDate: '',
  like: false,
  count: 0,
  headCount: 0,
  currentHeadCount: 0,
  date: '',
  userInfo: {
    writerEmail: '',
    writerName: '',
  },
  isUsedItem: false,
  isSuccessGetDetailPost: undefined,
  isSuccessLikePost: undefined,
  isSuccessDeleteLikePost: undefined,
  isSuccessDeletePost: undefined,
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const detailPostReducer = (
  state: DetailPostState = initState,
  action: detailPostActionType,
): DetailPostState => {
  switch (action.type) {
    case FEED_ID:
      return {
        ...state,
        feedId: action.payload,
      };
    case ROOM_ID:
      return {
        ...state,
        roomId: action.payload,
      };
    case GET_POST:
      return {
        ...state,
        isSuccessGetDetailPost: undefined,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        isSuccessGetDetailPost: true,
        feedId: action.payload.feed_id,
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        tags: action.payload.tags,
        photo: action.payload.photo,
        lastModifyDate: action.payload.lastModifyDate,
        like: action.payload.like,
        count: action.payload.count,
        headCount: action.payload.head_count,
        currentHeadCount: action.payload.current_head_count,
        date: action.payload.date,
        userInfo: {
          writerEmail: action.payload.user_info.writer_email,
          writerName: action.payload.user_info.writer_name,
        },
        isUsedItem: action.payload.used_item,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        isSuccessGetDetailPost: false,
        error: action.payload,
      };
    case POST_LIKE:
      return {
        ...state,
        isSuccessLikePost: undefined,
      };
    case POST_LIKE_SUCCESS:
      return {
        ...state,
        like: true,
        count: state.count + 1,
        isSuccessLikePost: true,
      };
    case POST_LIKE_FAILURE:
      return {
        ...state,
        isSuccessLikePost: false,
        error: action.payload,
      };
    case POST_LIKE_DELETE:
      return {
        ...state,
        isSuccessDeleteLikePost: undefined,
      };
    case POST_LIKE_DELETE_SUCCESS:
      return {
        ...state,
        like: false,
        count: state.count - 1,
        isSuccessDeleteLikePost: true,
      };
    case POST_LIKE_DELETE_FAILURE:
      return {
        ...state,
        isSuccessDeleteLikePost: false,
        error: action.payload,
      };
    case POST_DELETE:
      return {
        ...state,
        isSuccessDeletePost: undefined,
      };
    case POST_DELETE_SUCCESS:
      return {
        ...state,
        isSuccessDeletePost: true,
      };
    case POST_DELETE_FAILURE:
      return {
        ...state,
        isSuccessDeletePost: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default detailPostReducer;
