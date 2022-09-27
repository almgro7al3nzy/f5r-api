import { createAction } from 'typesafe-actions';
import { writeDetailPostResponse } from '../../../models/dto/response/detailPostResponse';
import { error } from '../../../models/error';
import {
  CARROT,
  CARROT_FAILURE,
  CARROT_SUCCESS,
  DATE,
  DESCRIPTION,
  HEADCOUNT,
  PRICE,
  TAGS,
  TITLE,
  GROUP,
  GROUP_SUCCESS,
  GROUP_FAILURE,
  PICTURE,
  PICTURE_SUCCESS,
  PICTURE_FAILURE,
  IMG,
  FEEDID,
  POST_CONTENT,
  POST_CONTENT_SUCCESS,
  POST_CONTENT_FAILURE,
  MODIFY_CARROT,
  MODIFY_CARROT_SUCCESS,
  MODIFY_CARROT_FAILURE,
  MODIFY_GROUP,
  MODIFY_GROUP_SUCCESS,
  MODIFY_GROUP_FAILURE,
  MODIFY_HASHTAG,
  MODIFY_HASHTAG_SUCCESS,
  MODIFY_HASHTAG_FAILURE,
} from './interface';

export const setTitle = createAction(TITLE)<string>();
export const setDescription = createAction(DESCRIPTION)<string>();
export const setPrice = createAction(PRICE)<number>();
export const setTags = createAction(TAGS)<Array<string>>();
export const setDate = createAction(DATE)<string>();
export const setHeadCount = createAction(HEADCOUNT)<number>();
export const setImg = createAction(IMG)<Array<File>>();
export const setFeedId = createAction(FEEDID)<number>();
export const carrot = createAction(CARROT)();
export const carrotSuccess = createAction(CARROT_SUCCESS)<{ feed_id: number }>();
export const carrotFailure = createAction(CARROT_FAILURE)<error>();
export const group = createAction(GROUP)();
export const groupSuccess = createAction(GROUP_SUCCESS)<{ feed_id: number }>();
export const groupFailure = createAction(GROUP_FAILURE)<error>();
export const picture = createAction(PICTURE)();
export const pictureSuccess = createAction(PICTURE_SUCCESS)();
export const pictureFailure = createAction(PICTURE_FAILURE)<error>();
export const postContent = createAction(POST_CONTENT)();
export const postContentSuccess = createAction(POST_CONTENT_SUCCESS)<writeDetailPostResponse>();
export const postContentFailure = createAction(POST_CONTENT_FAILURE)<error>();
export const modifyCarrot = createAction(MODIFY_CARROT)();
export const modifyCarrotSuccess = createAction(MODIFY_CARROT_SUCCESS)();
export const modifyCarrotFailure = createAction(MODIFY_CARROT_FAILURE)<error>();
export const modifyGroup = createAction(MODIFY_GROUP)();
export const modifyGroupSuccess = createAction(MODIFY_GROUP_SUCCESS)();
export const modifyGroupFailure = createAction(MODIFY_GROUP_FAILURE)<error>();
export const modifyHashtag = createAction(MODIFY_HASHTAG)();
export const modifyHashtagSuccess = createAction(MODIFY_HASHTAG_SUCCESS)();
export const modifyHashtagFailure = createAction(MODIFY_HASHTAG_FAILURE)<error>();

export type writePostActionType =
  | ReturnType<typeof setTitle>
  | ReturnType<typeof setDescription>
  | ReturnType<typeof setPrice>
  | ReturnType<typeof setTags>
  | ReturnType<typeof setDate>
  | ReturnType<typeof setHeadCount>
  | ReturnType<typeof setImg>
  | ReturnType<typeof setFeedId>
  | ReturnType<typeof carrot>
  | ReturnType<typeof carrotSuccess>
  | ReturnType<typeof carrotFailure>
  | ReturnType<typeof group>
  | ReturnType<typeof groupSuccess>
  | ReturnType<typeof groupFailure>
  | ReturnType<typeof picture>
  | ReturnType<typeof pictureSuccess>
  | ReturnType<typeof pictureFailure>
  | ReturnType<typeof postContent>
  | ReturnType<typeof postContentSuccess>
  | ReturnType<typeof postContentFailure>
  | ReturnType<typeof modifyCarrot>
  | ReturnType<typeof modifyCarrotSuccess>
  | ReturnType<typeof modifyCarrotFailure>
  | ReturnType<typeof modifyGroup>
  | ReturnType<typeof modifyGroupSuccess>
  | ReturnType<typeof modifyGroupFailure>
  | ReturnType<typeof modifyHashtag>
  | ReturnType<typeof modifyHashtagSuccess>
  | ReturnType<typeof modifyHashtagFailure>;
