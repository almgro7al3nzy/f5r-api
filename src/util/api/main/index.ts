import request from '../../axios';

export default {
  setCarrotGet() {
    return request({
      url: `/feed?page=0&range=2&is_used_item=true&sort=time`,
      method: 'get',
      headers: {},
      data: {},
    });
  },
  setGroupGet() {
    return request({
      url: `/feed?page=0&range=2&is_used_item=false&sort=time`,
      method: 'get',
      headers: {},
      data: {},
    });
  },
};
