import { postListType } from '../../../../models/dto/response/postResponse';
import { error } from '../../../../models/error';

interface PostState {
  postList: Array<postListType>;
  type: string;
  typeClick: { trade: boolean; group: boolean };
  order: { newest: boolean; like: boolean };
  page: number;
  isSuccessGetPostList: boolean | undefined;
  error: error;
  isHaveNextPage: boolean;
}

export default PostState;
