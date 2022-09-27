import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const writeCarrotPost = async (
  accessToken: string,
  title: string,
  description: string,
  price: number,
  tags: Array<string>,
) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.post(`${uri.carrot}`, { title, description, price, tags });
  } catch (error) {
    throw error;
  }
};

export const writeGroupPost = async (
  accessToken: string,
  title: string,
  description: string,
  price: number,
  tags: Array<string>,
  date: string,
  headCount: number,
) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.post(`${uri.group}`, {
      title,
      description,
      price,
      tags,
      date: new Date(date),
      head_count: headCount,
    });
  } catch (error) {
    throw error;
  }
};

export const postImg = async (accessToken: string, feedId: number, img: Array<File>) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    const formData = new FormData();
    img.map(data => {
      formData.append('files', data);
    });
    return await request.post(`${uri.feed}/${feedId}/photo`, formData);
  } catch (error) {
    throw error;
  }
};

export const modifyCarrotPost = async (
  accessToken: string,
  feedId: number,
  title: string,
  description: string,
  price: number,
) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.patch(`${uri.carrot}`, {
      feed_id: feedId,
      title,
      description,
      price,
    });
  } catch (error) {
    throw error;
  }
};

export const modifyGroupPost = async (
  accessToken: string,
  feedId: number,
  title: string,
  description: string,
  price: number,
  date: string,
  headCount: number,
) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.patch(`${uri.group}`, {
      feed_id: feedId,
      title,
      description,
      price,
      date: new Date(date),
      head_count: headCount,
    });
  } catch (error) {
    throw error;
  }
};

export const modifyHashtag = async (accessToken: string, feedId: number, tags: Array<string>) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.patch(`${uri.tag}`, {
      feed_id: feedId,
      tags,
    });
  } catch (error) {
    throw error;
  }
};
