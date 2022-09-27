import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import DetailPost from '../../components/detailPost';
import { GET_POST } from '../../modules/action/detailPost/interface';
import useDetailPost from '../../util/hooks/detailPost';

interface Props {
  socket: React.MutableRefObject<SocketIOClient.Socket | undefined>;
}

const DetailPostContainer: FC<Props> = props => {
  const { socket } = props;
  const { state, setState } = useDetailPost();
  const feedId = Number(useLocation().pathname.slice(11));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (state.error.status === 401 || state.error.status === 403) {
      alert('로그인이 필요합니다');
      history.push('/auth');
      window.location.reload();
    }
  }, [state.error]);

  useEffect(() => {
    if (state.isSuccessDeletePost) {
      history.push('/post');
      window.location.reload();
    }
  }, [state.isSuccessDeletePost]);

  useEffect(() => {
    setState.setFeedId(feedId);
    localStorage.setItem('feed_id', String(feedId));
    dispatch({ type: GET_POST });
  }, [feedId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailPost {...state} {...setState} socket={socket} />
    </Suspense>
  );
};

export default DetailPostContainer;
