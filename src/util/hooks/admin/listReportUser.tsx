import { useDispatch } from 'react-redux';
import { setPage } from '../../../modules/action/admin/list';
import { reportUserList } from '../../../modules/action/admin/list';
import useSelectState from '../default';

const useAdminReportUserList = () => {
  const dispatch = useDispatch();
  const state = useSelectState().adminReportUserList;
  const setState = {
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
    setAdminQuestionList: () => {
      dispatch(reportUserList);
    },
  };
  return { state, setState };
};

export default useAdminReportUserList;
