export type reportUserResponse = Array<listResponseType>;

export type listResponseType = {
  report_id: number | string;
  title: string;
  reporter_name: string;
  defendant_name: string;
  created_date: string;
  check: boolean;
};
