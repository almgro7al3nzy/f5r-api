/* eslint-disable import/no-anonymous-default-export */
import requset from '../../axios';

const access_token = localStorage.getItem('access_token');

export default {
  getUserInfo(email: string) {
    return requset({
      url: `/users/${email}`,
      method: 'get',
      headers: {
        Authorization: access_token && `Bearer ${access_token}`,
      },
    });
  },
  report(title: string, content: string, id: string) {
    const url = id.includes('@') ? 'users' : 'feed';
    const key = id.includes('@') ? 'email' : 'feed_id';

    return requset({
      url: `report/${url}`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data: {
        title,
        content,
        [key]: id,
      },
    });
  },
  imageUpload(report_id: number, file: any) {
    const formData = new FormData();
    formData.append('file', file);

    return requset({
      url: `report/${report_id}/medium`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data: formData,
    });
  },
};
