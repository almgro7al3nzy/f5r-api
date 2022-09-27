import React, { useCallback, useEffect, useState } from 'react';
import OptionsTemplate from '../../../default/profile/optionsTemplate';
import Footer from '../../../footer';
import Header from '../../../header';
import { written } from '../../../../assets/mypage';
import * as S from './style';
import PostContent from '../../../post/PostContent';
import mypage from '../../../../util/api/mypage';
import { useInView } from 'react-intersection-observer';

const WrittenPost = () => {
  const [isShow, setIsShow] = useState(true);
  const [postType, setPostType] = useState('trade');

  const [list, setList] = useState<Array<any>>([]);
  const [lastCheck, setLastCheck] = useState<boolean>();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();
  const { getUserPost } = mypage;

  const getList = useCallback(async () => {
    setLoading(true);
    setLastCheck(false);
    await getUserPost(localStorage.getItem('email'), page, postType)
      .then(res => {
        if (res.data.length === 0) {
          setLastCheck(true);
        }
        setList(prevState => [...prevState, ...res.data]);
      })
      .catch(err => {
        throw err;
      });
    setLoading(false);
  }, [page, postType]);

  useEffect(() => {
    getList();
  }, [page, postType]);

  useEffect(() => {
    setList([]);
    setPage(0);
    window.scrollTo({
      top: 0,
    });
  }, [postType]);

  useEffect(() => {
    if (inView && !loading && !lastCheck) {
      setPage(prevState => prevState + 1);
    }
  }, [inView, loading]);

  const setCarrot = () => {
    setPostType('trade');
  };

  const setGroup = () => {
    setPostType('group');
  };

  return (
    <S.Wrapper>
      <Header />
      <OptionsTemplate
        top={440}
        image={written}
        text={'작성한 게시물 보기'}
        setIsShow={setIsShow}
        isShow={isShow}
      />
      {isShow && (
        <S.ListWrapper>
          <S.TypeSelector postType={postType}>
            <p onClick={setCarrot}>거래</p>
            <p onClick={setGroup}>공구</p>
          </S.TypeSelector>
          {list.map(ele => {
            const month = ele.date && ele.date.slice(5, 7);
            const date = ele.date && ele.date.slice(8);
            const dates = `${month}/${date}`;
            const showPeople = `${ele.current_head_count}/${ele.head_count}`;
            return (
              <PostContent
                key={ele.feed_id}
                feedId={ele.feed_id}
                medium={ele.medium}
                title={ele.title}
                money={ele.price}
                like={ele.count}
                type={postType}
                date={dates}
                people={showPeople}
                hashtag={ele.tags}
                isLikeClick={ele.like}
              />
            );
          })}
          {!loading && <p ref={ref}>로딩 중...</p>}
        </S.ListWrapper>
      )}

      <Footer />
    </S.Wrapper>
  );
};

export default WrittenPost;
