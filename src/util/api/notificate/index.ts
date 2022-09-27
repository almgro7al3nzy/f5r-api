import request from '../../axios';

export default {
  setListGet(accessToken: string | null, page: number) {
    return request({
      url: `/notification/list?page=${page}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
  setTagGet(accessToken: string | null) {
    return request({
      url: `/notification/tags`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
  setTagPost(accessToken: string | null, tag: string) {
    return request({
      url: `/notification/tags`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: { tag: tag },
    });
  },
  setTagDelete(accessToken: string | null, tagId: number) {
    return request({
      url: `/notification/tags`,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: { tag_id: tagId },
    });
  },
  setNotiCheck(accessToken: string | null, notiId: number) {
    return request({
      url: `/notification/${notiId}`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
  setQuestionAnswer(accessToken: string | null, id: number | string) {
    return request({
      url: `/question?question_id=${id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
  setReportAnswer(accessToken: string | null, id: number | string) {
    return request({
      url: `/report?report_id=${id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
};
