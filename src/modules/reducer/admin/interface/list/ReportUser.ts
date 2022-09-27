import { reportUserResponse } from '../../../../../models/dto/response/reportUserResponse';
import { error } from '../../../../../models/error';

export interface AdminReportUserListState {
  list: reportUserResponse;
  page: number;
  isHaveNextPage: boolean;
  isSuccessGetList: boolean | undefined;
  error: error;
}
