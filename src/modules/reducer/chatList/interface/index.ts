import { chatListResponseType } from '../../../../models/dto/response/chatListResponse';
import { error } from '../../../../models/error';

interface ChatListState {
  chatList: Array<chatListResponseType>;
  error: error;
  isSuccessGetChatList: boolean | undefined;
}

export default ChatListState;
