import { useDispatch } from 'react-redux';
import { detailChatResponse } from '../../../models/dto/response/detailChatResponse';
import { setMessage, setPage, setRoomId } from '../../../modules/action/detailChat';
import useSelectState from '../default';

const useDetailChat = () => {
  const dispatch = useDispatch();
  const state = useSelectState().detailChat;
  const setState = {
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
    setRoomId: (payload: string) => {
      dispatch(setRoomId(payload));
    },
    setMessage: (payload: detailChatResponse) => {
      dispatch(setMessage(payload));
    },
  };
  return { state, setState };
};

export default useDetailChat;
