import { questionResponse } from '../../../../../models/dto/response/questionResponse';
import { error } from '../../../../../models/error';

export interface AdminQuestionListState {
  list: questionResponse;
  page: number;
  isHaveNextPage: boolean;
  isSuccessGetList: boolean | undefined;
  error: error;
}
