import { useDispatch } from 'react-redux';
import { setPage } from '../../../modules/action/admin/list';
import { questionList } from '../../../modules/action/admin/list';
import useSelectState from '../default';

const useAdminQuestionList = () => {
  const dispatch = useDispatch();
  const state = useSelectState().adminQuestionList;
  const setState = {
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
    setAdminQuestionList: () => {
      dispatch(questionList);
    },
  };
  return { state, setState };
};

export default useAdminQuestionList;
