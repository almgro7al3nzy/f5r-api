import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import Sidebar from '../sidebar/index';
import Frame from './frame/index';
import List from './list/index';
import { suggestionIcon } from '../../../assets/defalut';
import { useInView } from 'react-intersection-observer';
import { questionResponse } from '../../../models/dto/response/questionResponse';

interface Props {
  setPage: (payload: number) => void;
  page: number;
  isHaveNextPage: boolean;
  list: questionResponse;
}

const Suggestion: FC<Props> = props => {
  const { setPage, page, isHaveNextPage, list } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const { inView } = useInView();

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (list.length !== 0) {
      if (inView && !loading) {
        setLoading(true);
        if (list !== []) {
          setPage(page + 1);
        }
      }
    }
  }, [inView]);

  useEffect(() => {
    if (isHaveNextPage) setLoading(false);
    else setLoading(true);
  }, [isHaveNextPage]);

  return (
    <S.Wrapper>
      <Sidebar />
      <S.Main>
        <Frame listTitle='문의사항' imgSrc={suggestionIcon} divType='none' postOp='' userOp='' />
        <S.Chart>
          <S.ChartTitle>
            <p>번호</p>
            <h3>제목</h3>
            <div>
              <p></p>
              <p>작성자</p>
              <p>작성일</p>
              <p>확인 여부</p>
            </div>
          </S.ChartTitle>
          <article>
            {list &&
              list.map((data, index) => {
                return (
                  <article>
                    <List
                      key={index}
                      postId={data.question_id}
                      title={data.title}
                      target={''}
                      writer={data.user_name}
                      date={data.created_date}
                      check={data.check}
                      option={3}
                    />
                  </article>
                );
              })}
          </article>
        </S.Chart>
      </S.Main>
    </S.Wrapper>
  );
};

export default Suggestion;
