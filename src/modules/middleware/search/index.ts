import { reducerType } from '../../reducer';
import SearchState from '../../reducer/search/interface';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getSearchList } from '../../../util/api/search';
import { SEARCH } from '../../action/search/interface';

const getStateFunc = (state: reducerType): SearchState => state.search;

const searchGetSaga = function* (): any {
  const actionType = 'SEARCH/SEARCH';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getSearchList, accessToken, state.page, state.type, state.title);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: actionType },
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

function* searchSaga() {
  yield takeLatest(SEARCH, searchGetSaga);
}

export default searchSaga;
