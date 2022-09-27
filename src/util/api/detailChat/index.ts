import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getDetailChat = async (accessToken: string, roomId: string, page: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(`${uri.content}?page=${page}&room_id=${roomId}`);
  } catch (error) {
    throw error;
  }
};

export const getInfo = async (accessToken: string) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(uri.info);
  } catch (error) {
    throw error;
  }
};

export const getChatInfo = async (accessToken: string, roomId: string) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(`${uri.chatinfo}?room_id=${roomId}`);
  } catch (error) {
    throw error;
  }
};
