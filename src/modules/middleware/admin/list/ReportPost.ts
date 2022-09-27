import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../../reducer';
import { REPORT_POST_LIST } from '../../../action/admin/interface';
import { getAdminReportPostList } from '../../../../util/api/admin';
import { AdminReportPostListState } from '../../../reducer/admin/interface';

const getReportPostStateFunc = (state: reducerType): AdminReportPostListState =>
  state.adminReportPostList;

const reportPostListGetSaga = function* (): any {
  const actionType = 'ADMIN/REPORT_POST_LIST';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getReportPostStateFunc);
  const accessToekn = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getAdminReportPostList, accessToekn, state.page);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: REPORT_POST_LIST },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: 'Network Error',
          status: 500,
        },
      });
    }
  }
};
function* adminReportPostSaga() {
  yield takeLatest(REPORT_POST_LIST, reportPostListGetSaga);
}

export default adminReportPostSaga;
