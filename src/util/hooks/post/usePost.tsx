import { useDispatch } from 'react-redux';
import { setOrder, setPage, setType, setTypeClick } from '../../../modules/action/post';
import useSelectState from '../default';

const usePost = () => {
  const dispatch = useDispatch();
  const state = useSelectState().post;
  const setState = {
    setType: (payload: string) => {
      dispatch(setType(payload));
    },
    setOrder: (payload: { newest: boolean; like: boolean }) => {
      dispatch(setOrder(payload));
    },
    setTypeClick: (payload: { trade: boolean; group: boolean }) => {
      dispatch(setTypeClick(payload));
    },
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
  };
  return { state, setState };
};

export default usePost;
