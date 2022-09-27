import { createAction } from 'typesafe-actions';
import { searchListType } from '../../../models/dto/response/searchResponse';
import { error } from '../../../models/error';
import {
  SEARCH,
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
  TYPE,
  TYPECLICK,
  PAGE,
  TITLE,
  SEARCHLIST,
} from './interface';

export const search = createAction(SEARCH)();
export const searchSuccess = createAction(SEARCH_SUCCESS)<Array<searchListType>>();
export const searchFailure = createAction(SEARCH_FAILURE)<error>();
export const setType = createAction(TYPE)<string>();
export const setTypeClick = createAction(TYPECLICK)<{ trade: boolean; group: boolean }>();
export const setPage = createAction(PAGE)<number>();
export const setTitle = createAction(TITLE)<string>();
export const setSearchList = createAction(SEARCHLIST)();

export type searchActionType =
  | ReturnType<typeof search>
  | ReturnType<typeof searchSuccess>
  | ReturnType<typeof searchFailure>
  | ReturnType<typeof setType>
  | ReturnType<typeof setTypeClick>
  | ReturnType<typeof setPage>
  | ReturnType<typeof setTitle>
  | ReturnType<typeof setSearchList>;
