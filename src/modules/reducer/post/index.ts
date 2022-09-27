import PostState from './interface';
import { postActionType } from '../../action/post';
import {
  ORDER,
  TYPE,
  PAGE,
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  TYPECLICK,
} from '../../action/post/interface';

const initState: PostState = {
  postList: [],
  type: 'trade',
  order: { newest: true, like: false },
  typeClick: { trade: true, group: false },
  page: 0,
  isSuccessGetPostList: undefined,
  isHaveNextPage: false,
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const postReducer = (state: PostState = initState, action: postActionType): PostState => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        isSuccessGetPostList: undefined,
        isHaveNextPage: false,
      };
    case GET_POST_SUCCESS:
      if (action.payload.length !== 0)
        return {
          ...state,
          postList: state.postList.concat(action.payload),
          isSuccessGetPostList: true,
          isHaveNextPage: true,
        };
      else
        return {
          ...state,
          isHaveNextPage: false,
        };
    case GET_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetPostList: false,
      };
    case TYPE:
      return {
        ...state,
        type: action.payload,
        postList: [],
      };
    case ORDER:
      return {
        ...state,
        order: action.payload,
        postList: [],
      };
    case PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case TYPECLICK:
      return {
        ...state,
        typeClick: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
