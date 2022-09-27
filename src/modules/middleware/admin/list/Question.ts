import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../../reducer';
import { QUESTION_LIST } from '../../../action/admin/interface';
import { getAdminQuestionList } from '../../../../util/api/admin';
import { AdminQuestionListState } from '../../../reducer/admin/interface';

const getQuestionStateFunc = (state: reducerType): AdminQuestionListState =>
  state.adminQuestionList;

const questionListGetSaga = function* (): any {
  const actionType = 'ADMIN/QUESTION_LIST';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getQuestionStateFunc);
  const accessToekn = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getAdminQuestionList, accessToekn, state.page);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: QUESTION_LIST },
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

function* adminQuestionSaga() {
  yield takeLatest(QUESTION_LIST, questionListGetSaga);
}

export default adminQuestionSaga;