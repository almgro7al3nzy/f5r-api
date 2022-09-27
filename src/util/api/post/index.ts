import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

const isUsedItem = (type: string) => {
  if (type === 'trade') return true;
  else return false;
};

export const getPostList = async (
  accessToken: string,
  page: number,
  sort: string,
  type: string,
) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(
      `${uri.feed}?page=${page}&range=4&is_used_item=${isUsedItem(type)}&sort=${sort}`,
    );
  } catch (error) {
    throw error;
  }
};
