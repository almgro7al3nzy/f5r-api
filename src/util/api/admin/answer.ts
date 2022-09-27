import request from '../../axios';

export default {
  setQuestionAnswer(accessToken: string | null, id: string | number, reason: string) {
    return request({
      url: `/admin/question`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: { question_id: id, reason: reason },
    });
  },
  setReportPostAnswer(
    accessToken: string | null,
    id: string | number,
    reason: string,
    removeCheck: boolean,
  ) {
    return request({
      url: `/admin/report/feed`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: { report_id: id, reason: reason, remove: removeCheck },
    });
  },
  setReportUserAnswer(
    accessToken: string | null,
    id: string | number,
    reason: string,
    date: string | undefined,
  ) {
    return request({
      url: `/admin/report/users`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: { report_id: id, reason: reason, black_date: date },
    });
  },
  setUserBlack(accessToken: string | null, id: string | number) {
    return request({
      url: `/admin/report/${id}/date`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: { report_id: id },
    });
  },
  setUserBlackChange(accessToken: string | null, id: string | number, date: string) {
    return request({
      url: `/admin/report/${id}/date`,
      method: 'patch',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: { black_date: date },
    });
  },
};
