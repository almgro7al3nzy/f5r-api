import { reportPostResponse } from '../../../../../models/dto/response/reportPostResponse';
import { error } from '../../../../../models/error';

export interface AdminReportPostListState {
  list: reportPostResponse;
  page: number;
  isHaveNextPage: boolean;
  isSuccessGetList: boolean | undefined;
  error: error;
}
