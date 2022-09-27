import { AdminQuestionListState } from '../interface';
import { adminActionType } from '../../../action/admin/list';
import {
  QUESTION_LIST,
  QUESTION_LIST_SUCCESS,
  QUESTION_LIST_FAILURE,
  PAGE,
} from '../../../action/admin/interface';

const initState: AdminQuestionListState = {
  list: [],
  page: 0,
  isHaveNextPage: false,
  isSuccessGetList: undefined,
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const adminQuestionListReducer = (
  state: AdminQuestionListState = initState,
  action: adminActionType,
): AdminQuestionListState => {
  switch (action.type) {
    case QUESTION_LIST:
      return {
        ...state,
        isSuccessGetList: undefined,
      };
    case QUESTION_LIST_SUCCESS:
      if (action.payload.length !== 0)
        return {
          ...state,
          list: action.payload,
          isSuccessGetList: true,
          isHaveNextPage: true,
        };
      else
        return {
          ...state,
          isHaveNextPage: false,
        };
    case QUESTION_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetList: false,
      };
    case PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default adminQuestionListReducer;
