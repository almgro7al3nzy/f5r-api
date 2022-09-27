import { detailChatResponse } from '../../../../models/dto/response/detailChatResponse';
import { error } from '../../../../models/error';

interface DetailChatState {
  page: number;
  roomId: string;
  roomName: string;
  count: number;
  chatContent: Array<detailChatResponse>;
  roomNumber: string;
  accountNumber: string;
  error: error;
  isSuccessGetDetailChat: boolean | undefined;
  isSuccessGetInfo: boolean | undefined;
  isHaveNextPage: boolean;
}

export default DetailChatState;
