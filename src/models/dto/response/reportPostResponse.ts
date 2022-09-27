export type reportPostResponse = Array<listResponseType>;

export type listResponseType = {
  report_id: number | string;
  title: string;
  reporter_name: string;
  created_date: string;
  check: boolean;
};
