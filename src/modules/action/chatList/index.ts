import { createAction } from 'typesafe-actions';
import { chatListResponseType } from '../../../models/dto/response/chatListResponse';
import { error } from '../../../models/error';
import {
  CARROT_CHAT,
  CARROT_CHAT_FAILURE,
  CARROT_CHAT_SUCCESS,
  GROUP_CHAT,
  GROUP_CHAT_FAILURE,
  GROUP_CHAT_SUCCESS,
} from './interface';

export const carrotChat = createAction(CARROT_CHAT)();
export const carrotChatSuccess = createAction(CARROT_CHAT_SUCCESS)<Array<chatListResponseType>>();
export const carrotChatFailure = createAction(CARROT_CHAT_FAILURE)<error>();
export const groupChat = createAction(GROUP_CHAT)();
export const groupChatSuccess = createAction(GROUP_CHAT_SUCCESS)<Array<chatListResponseType>>();
export const groupChatFailure = createAction(GROUP_CHAT_FAILURE)<error>();

export type chatListActionType =
  | ReturnType<typeof carrotChat>
  | ReturnType<typeof carrotChatSuccess>
  | ReturnType<typeof carrotChatFailure>
  | ReturnType<typeof groupChat>
  | ReturnType<typeof groupChatSuccess>
  | ReturnType<typeof groupChatFailure>;
