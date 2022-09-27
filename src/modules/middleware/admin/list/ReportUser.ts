import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../../reducer';
import { REPORT_POST_LIST, REPORT_USER_LIST } from '../../../action/admin/interface';
import { getAdminReportUserList } from '../../../../util/api/admin';
import { AdminReportUserListState } from '../../../reducer/admin/interface';

const getReportUserStateFunc = (state: reducerType): AdminReportUserListState =>
  state.adminReportUserList;

const reportUserListGetSaga = function* (): any {
  const actionType = 'ADMIN/REPORT_USER_LIST';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getReportUserStateFunc);
  const accessToekn = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getAdminReportUserList, accessToekn, state.page);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: REPORT_USER_LIST },
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

function* adminReportUserSaga() {
  yield takeLatest(REPORT_USER_LIST, reportUserListGetSaga);
}

export default adminReportUserSaga;
