import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const carrotChatList = async (accessToken: string) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(uri.chatCarrot);
  } catch (error) {
    throw error;
  }
};

export const groupChatList = async (accessToken: string) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(uri.chatGroup);
  } catch (error) {
    throw error;
  }
};
