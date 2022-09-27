import request from '../../axios';

export default {
  setQuestion(id: string | number, accessToken: string | null) {
    return request({
      url: `/admin/question/${id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
  setReportPost(id: string | number, accessToken: string | null) {
    return request({
      url: `/admin/report/${id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
  setReportUser(id: string | number, accessToken: string | null) {
    return request({
      url: `/admin/report/${id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
};
