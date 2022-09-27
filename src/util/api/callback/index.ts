/* eslint-disable import/no-anonymous-default-export */
import request from '../../axios';

export default {
  auth(code: any) {
    return request({
      url: `/users/auth`,
      method: 'post',
      data: { code },
    });
  },
};
