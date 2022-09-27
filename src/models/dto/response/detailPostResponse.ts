export type detailPostResponse = {
  feed_id: number;
  title: string;
  description: string;
  price: number;
  tags: Array<string>;
  photo: Array<string>;
  lastModifyDate: string;
  like: boolean;
  count: number;
  head_count: number;
  current_head_count: number;
  date: string;
  user_info: {
    writer_email: string;
    writer_name: string;
  };
  used_item: boolean;
};

export type writeDetailPostResponse = {
  feed_id: number;
  title: string;
  tags: Array<string>;
  photo: Array<string>;
  description: string;
  price: number;
  date: string;
  head_count: number;
};
