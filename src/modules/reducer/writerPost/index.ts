import WritePostState from './interface';
import { writePostActionType } from '../../action/writePost';
import {
  DESCRIPTION,
  PRICE,
  TAGS,
  TITLE,
  DATE,
  HEADCOUNT,
  CARROT,
  CARROT_SUCCESS,
  CARROT_FAILURE,
  GROUP,
  GROUP_SUCCESS,
  GROUP_FAILURE,
  IMG,
  FEEDID,
  PICTURE,
  PICTURE_SUCCESS,
  PICTURE_FAILURE,
  POST_CONTENT_SUCCESS,
  POST_CONTENT_FAILURE,
  MODIFY_CARROT,
  MODIFY_CARROT_SUCCESS,
  MODIFY_CARROT_FAILURE,
  MODIFY_GROUP,
  MODIFY_GROUP_SUCCESS,
  MODIFY_GROUP_FAILURE,
  MODIFY_HASHTAG,
  MODIFY_HASHTAG_SUCCESS,
  MODIFY_HASHTAG_FAILURE,
} from '../../action/writePost/interface';

const initState: WritePostState = {
  title: '',
  description: '',
  price: 0,
  tags: [],
  date: '',
  headCount: 0,
  img: [],
  feedId: 0,
  postImg: [],
  error: {
    status: 0,
    type: '',
    message: '',
  },
  isSuccessSavePost: undefined,
  isSuccessSavePicture: undefined,
  isSuccessModifyPost: undefined,
  isSuccessModifyHashtag: undefined,
};

const writePostReducer = (
  state: WritePostState = initState,
  action: writePostActionType,
): WritePostState => {
  switch (action.type) {
    case TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    case DATE:
      return {
        ...state,
        date: action.payload,
      };
    case HEADCOUNT:
      return {
        ...state,
        headCount: action.payload,
      };
    case IMG:
      return {
        ...state,
        img: action.payload,
      };
    case FEEDID:
      return {
        ...state,
        feedId: action.payload,
      };
    case CARROT:
      return {
        ...state,
        isSuccessSavePost: undefined,
      };
    case CARROT_SUCCESS:
      return {
        ...state,
        feedId: action.payload.feed_id,
        isSuccessSavePost: true,
      };
    case CARROT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessSavePost: false,
      };
    case GROUP:
      return {
        ...state,
        isSuccessSavePost: undefined,
      };
    case GROUP_SUCCESS:
      return {
        ...state,
        feedId: action.payload.feed_id,
        isSuccessSavePost: true,
      };
    case GROUP_FAILURE:
      return {
        ...state,
        isSuccessSavePost: false,
        error: action.payload,
      };
    case PICTURE:
      return {
        ...state,
        isSuccessSavePicture: undefined,
      };
    case PICTURE_SUCCESS:
      return {
        ...state,
        isSuccessSavePicture: true,
      };
    case PICTURE_FAILURE:
      return {
        ...state,
        isSuccessSavePicture: false,
        error: action.payload,
      };
    case POST_CONTENT_SUCCESS:
      return {
        ...state,
        feedId: action.payload.feed_id,
        title: action.payload.title,
        tags: action.payload.tags,
        postImg: action.payload.photo,
        description: action.payload.description,
        price: action.payload.price,
        date: action.payload.date,
        headCount: action.payload.head_count,
      };
    case POST_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case MODIFY_CARROT:
      return {
        ...state,
        isSuccessModifyPost: undefined,
      };
    case MODIFY_CARROT_SUCCESS:
      return {
        ...state,
        isSuccessModifyPost: true,
      };
    case MODIFY_CARROT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessModifyPost: false,
      };
    case MODIFY_GROUP:
      return {
        ...state,
        isSuccessModifyPost: undefined,
      };
    case MODIFY_GROUP_SUCCESS:
      return {
        ...state,
        isSuccessModifyPost: true,
      };
    case MODIFY_GROUP_FAILURE:
      return {
        ...state,
        isSuccessModifyPost: false,
        error: action.payload,
      };
    case MODIFY_HASHTAG:
      return {
        ...state,
        isSuccessModifyHashtag: undefined,
      };
    case MODIFY_HASHTAG_SUCCESS:
      return {
        ...state,
        isSuccessModifyHashtag: true,
      };
    case MODIFY_HASHTAG_FAILURE:
      return {
        ...state,
        isSuccessModifyHashtag: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default writePostReducer;
