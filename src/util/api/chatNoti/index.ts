import request from '../../axios';

export default {
  setRingGet(accessToken: string | null) {
    return request({
      url: `/users/notification`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
  setRingPost(accessToken: string | null) {
    return request({
      url: `/users/notification`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
  setRingDelete(accessToken: string | null) {
    return request({
      url: `/users/notification`,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
};
