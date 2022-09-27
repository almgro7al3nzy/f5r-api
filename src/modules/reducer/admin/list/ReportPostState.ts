import { AdminReportPostListState } from '../interface';
import { adminActionType } from '../../../action/admin/list';
import {
  REPORT_POST_LIST,
  REPORT_POST_LIST_SUCCESS,
  REPORT_POST_LIST_FAILURE,
  PAGE,
} from '../../../action/admin/interface';

const initState: AdminReportPostListState = {
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

const adminReportPostListReducer = (
  state: AdminReportPostListState = initState,
  action: adminActionType,
): AdminReportPostListState => {
  switch (action.type) {
    case REPORT_POST_LIST:
      return {
        ...state,
        isSuccessGetList: undefined,
      };
    case REPORT_POST_LIST_SUCCESS:
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
    case REPORT_POST_LIST_FAILURE:
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

export default adminReportPostListReducer;
