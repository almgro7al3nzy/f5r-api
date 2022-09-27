import { call, put, takeLatest } from 'redux-saga/effects';
import { carrotChatList, groupChatList } from '../../../util/api/chatList';
import { CARROT_CHAT, GROUP_CHAT } from '../../action/chatList/interface';

const carrotChatListGetSaga = function* (): any {
  const actionType = 'CHATLIST/CARROT_CHAT';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE`;
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(carrotChatList, accessToken);
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

const groupChatListGetSaga = function* (): any {
  const actionType = 'CHATLIST/GROUP_CHAT';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE`;
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(groupChatList, accessToken);
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

function* chatListSaga() {
  yield takeLatest(CARROT_CHAT, carrotChatListGetSaga);
  yield takeLatest(GROUP_CHAT, groupChatListGetSaga);
}
export default chatListSaga;
