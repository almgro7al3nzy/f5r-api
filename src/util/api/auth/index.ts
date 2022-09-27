/* eslint-disable import/no-anonymous-default-export */
import request from '../../axios';

export default {
  getAuthLink() {
    return request({
      url: `/users/oauth`,
      method: 'get',
    });
  },
};
