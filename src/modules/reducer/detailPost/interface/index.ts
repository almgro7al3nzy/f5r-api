import { error } from '../../../../models/error';

interface DetailPostState {
  feedId: number;
  roomId: string;
  title: string;
  description: string;
  price: number;
  tags: Array<string>;
  photo: Array<string>;
  lastModifyDate: string;
  like: boolean;
  count: number;
  headCount: number;
  currentHeadCount: number;
  date: string;
  userInfo: {
    writerEmail: string;
    writerName: string;
  };
  isUsedItem: boolean;
  isSuccessGetDetailPost: boolean | undefined;
  isSuccessLikePost: boolean | undefined;
  isSuccessDeleteLikePost: boolean | undefined;
  isSuccessDeletePost: boolean | undefined;
  error: error;
}

export default DetailPostState;
