import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getDetailPost = async (accessToken: string, feedId: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(`${uri.feed}/${feedId}`);
  } catch (error) {
    throw error;
  }
};

export const postLike = async (accessToken: string, feedId: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.post(`/feed/${feedId}${uri.like}`);
  } catch (error) {
    throw error;
  }
};

export const postLikeDelete = async (accessToken: string, feedId: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.delete(`/feed/${feedId}${uri.like}`);
  } catch (error) {
    throw error;
  }
};

export const postDelete = async (accessToken: string, feedId: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.delete(`${uri.feed}/${feedId}`);
  } catch (error) {
    throw error;
  }
};
