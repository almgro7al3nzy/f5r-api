/* eslint-disable import/no-anonymous-default-export */
import request from '../../axios';

export default {
  setInformation(room_number: string, account_number: string) {
    return request({
      url: `/users/information`,
      method: 'patch',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      data: {
        room_number,
        account_number,
      },
    });
  },
};
