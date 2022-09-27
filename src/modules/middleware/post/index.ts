import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getPostList } from '../../../util/api/post';
import { GET_POST } from '../../action/post/interface';
import { reducerType } from '../../reducer';
import PostState from '../../reducer/post/interface';

const getStateFunc = (state: reducerType): PostState => state.post;

const postGetSaga = function* (): any {
  const actionType = 'POST/GET_POST';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE`;
  const state = yield select(getStateFunc);
  const sort = state.order.newest ? 'time' : 'like';
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getPostList, accessToken, state.page, sort, state.type);
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

function* postSaga() {
  yield takeLatest(GET_POST, postGetSaga);
}

export default postSaga;
