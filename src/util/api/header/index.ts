import request from '../../axios';

export default {
  setNotiCount(accessToken: string | null) {
    return request({
      url: `/notification/count`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
};
