import { AdminReportUserListState } from '../interface';
import { adminActionType } from '../../../action/admin/list';
import {
  REPORT_USER_LIST,
  REPORT_USER_LIST_SUCCESS,
  REPORT_USER_LIST_FAILURE,
  PAGE,
} from '../../../action/admin/interface';
const initState: AdminReportUserListState = {
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

const adminReportUserListReducer = (
  state: AdminReportUserListState = initState,
  action: adminActionType,
): AdminReportUserListState => {
  switch (action.type) {
    case REPORT_USER_LIST:
      return {
        ...state,
        isSuccessGetList: undefined,
      };
    case REPORT_USER_LIST_SUCCESS:
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
    case REPORT_USER_LIST_FAILURE:
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

export default adminReportUserListReducer;
