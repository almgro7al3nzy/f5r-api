export type questionResponse = Array<listResponseType>;

export type listResponseType = {
  question_id: number | string;
  title: string;
  user_name: string;
  created_date: string;
  check: boolean;
};
