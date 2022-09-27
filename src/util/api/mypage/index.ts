/* eslint-disable import/no-anonymous-default-export */
import request from '../../axios';

export default {
  getMyInfo() {
    return request({
      url: `/users/information`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  },
  setHideAccount() {
    return request({
      url: `/users/hide`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  },
  unsetHideAccount() {
    return request({
      url: `/users/hide`,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  },
  deleteToken() {
    return request({
      url: `users/logout`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  },
  registerSuggestion(title: string, content: string) {
    return request({
      url: `/question`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      data: {
        title,
        description: content,
      },
    });
  },
  modifyInfo(room_number: string, account_number: string) {
    return request({
      url: `users/information`,
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
  getUserPost(email: any, page: number, postType: string) {
    const is_used_item = postType === 'trade';
    return request({
      url: `/feed/users/${email}?page=${page}&size=5&is_used_item=${is_used_item}`,
      method: 'get',
    });
  },
  getLikePost(page: number, postType: string) {
    const is_used_item = postType === 'trade';
    return request({
      url: `/feed/me/like?page=${page}&size=5&is_used_item=${is_used_item}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  },
};
