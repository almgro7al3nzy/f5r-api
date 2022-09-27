export type postResponse = Array<postListType>;

export type postListType = {
  feed_id: number;
  title: string;
  description: string;
  price: number;
  tags: Array<string>;
  medium: string;
  count: number;
  like: boolean;
  head_count: number;
  current_head_count: number;
  date: string;
  // last_modify_date: string;
  // recruitment_date: string;
};
