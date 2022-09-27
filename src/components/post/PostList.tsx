/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import PostContent from './PostContent';
import { postListType } from '../../models/dto/response/postResponse';
import { useInView } from 'react-intersection-observer';
import { chickLogo } from '../../assets/logo';

interface Props {
  type: string;
  order?: { newest: boolean; like: boolean };
  page: number;
  postList: Array<postListType>;
  isHaveNextPage: boolean;
  setPage: (payload: number) => void;
}

const PostList: FC<Props> = props => {
  const { type, postList, page, setPage, isHaveNextPage, order } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    setLoading(false);
  }, [type, order]);

  useEffect(() => {
    if (postList.length !== 0) {
      if (inView && !loading) {
        setLoading(true);
        if (postList !== []) {
          setPage(page + 1);
        }
      }
    }
  }, [inView]);

  useEffect(() => {
    if (isHaveNextPage) setLoading(false);
    else setLoading(true);
  }, [isHaveNextPage]);

  const noContent = useMemo(() => {
    if (postList.length === 0) {
      setLoading(true);
      return <S.NoContent>게시물이 존재하지 않습니다.</S.NoContent>;
    }
  }, [postList]);

  return (
    <S.PostList>
      {postList &&
        postList.map(data => {
          const month = data.date && data.date.slice(5, 7);
          const date = data.date && data.date.slice(8);
          const dates = `${month}/${date}`;
          const showPeople = `${data.current_head_count}/${data.head_count}`;
          return (
            <PostContent
              key={data.feed_id}
              feedId={data.feed_id}
              medium={data.medium}
              title={data.title}
              money={data.price}
              like={data.count}
              type={type}
              date={dates}
              people={showPeople}
              hashtag={data.tags}
              isLikeClick={data.like}
            />
          );
        })}
      {noContent}
      {!loading && (
        <S.Loading ref={ref}>
          <img src={chickLogo} alt='loading' />
        </S.Loading>
      )}
    </S.PostList>
  );
};

export default PostList;
