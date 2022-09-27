import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getDetailPost, postDelete, postLike, postLikeDelete } from '../../../util/api/detailPost';
import {
  GET_POST,
  POST_DELETE,
  POST_LIKE,
  POST_LIKE_DELETE,
} from '../../action/detailPost/interface';
import { reducerType } from '../../reducer';
import DetailPostState from '../../reducer/detailPost/interface';

const getStateFunc = (state: reducerType): DetailPostState => state.detailPost;

const detailPostGetSaga = function* (): any {
  const actionType = 'DETAILPOST/GET_POST';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getDetailPost, accessToken, state.feedId);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: actionType },
      });
    } else {
      console.log(error);
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

const postLikeSaga = function* (): any {
  const actionType = 'DETAILPOST/POST_LIKE';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(postLike, accessToken, state.feedId);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: actionType },
      });
    } else {
      console.log(error);
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

const postLikeDeleteSaga = function* (): any {
  const actionType = 'DETAILPOST/POST_LIKE_DELETE';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(postLikeDelete, accessToken, state.feedId);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: actionType },
      });
    } else {
      console.log(error);
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

const postDeleteSaga = function* (): any {
  const actionType = 'DETAILPOST/POST_DELETE';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(postDelete, accessToken, state.feedId);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: actionType },
      });
    } else {
      console.log(error);
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

function* detailPostSaga() {
  yield takeLatest(GET_POST, detailPostGetSaga);
  yield takeLatest(POST_LIKE, postLikeSaga);
  yield takeLatest(POST_LIKE_DELETE, postLikeDeleteSaga);
  yield takeLatest(POST_DELETE, postDeleteSaga);
}

export default detailPostSaga;
