import { createAction } from 'typesafe-actions';
import { postResponse } from '../../../models/dto/response/postResponse';
import { error } from '../../../models/error';
import {
  ORDER,
  TYPE,
  PAGE,
  TYPECLICK,
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
} from './interface';

export const getPost = createAction(GET_POST)();
export const getPostSuccess = createAction(GET_POST_SUCCESS)<postResponse>();
export const getPostFailure = createAction(GET_POST_FAILURE)<error>();
export const setType = createAction(TYPE)<string>();
export const setPage = createAction(PAGE)<number>();
export const setOrder = createAction(ORDER)<{ newest: boolean; like: boolean }>();
export const setTypeClick = createAction(TYPECLICK)<{ trade: boolean; group: boolean }>();

export type postActionType =
  | ReturnType<typeof getPost>
  | ReturnType<typeof getPostSuccess>
  | ReturnType<typeof getPostFailure>
  | ReturnType<typeof setPage>
  | ReturnType<typeof setType>
  | ReturnType<typeof setOrder>
  | ReturnType<typeof setTypeClick>;
