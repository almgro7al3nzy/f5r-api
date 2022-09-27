import React, { FC } from 'react';
import * as S from './style';
import Header from '../header';
import Footer from '../footer';
import { SEARCH_TITLE, TRADEANDGROUP } from '../../constance/search';
import PostList from '../post/PostList';
import { searchListType } from '../../models/dto/response/searchResponse';

interface Props {
  type: string;
  typeClick: { trade: boolean; group: boolean };
  page: number;
  searchList: Array<searchListType>;
  isHaveNextPage: boolean;
  setPage: (payload: number) => void;
  setType: (payload: string) => void;
  setTypeClick: (payload: { trade: boolean; group: boolean }) => void;
}

const Search: FC<Props> = props => {
  const {
    type,
    typeClick,
    page,
    searchList,
    isHaveNextPage,
    setPage,
    setType,
    setTypeClick,
  } = props;

  const subtitleClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const dataId = event.currentTarget.dataset.id;
    switch (dataId) {
      case 'trade':
        setTypeClick({ trade: true, group: false });
        setType('trade');
        setPage(0);
        break;
      case 'group':
        setTypeClick({ trade: false, group: true });
        setType('group');
        setPage(0);
        break;
    }
  };

  const clickState = (dataId: string) => {
    switch (dataId) {
      case 'trade':
        return typeClick.trade;
      case 'group':
        return typeClick.group;
    }
  };

  return (
    <>
      <Header />
      <S.Search>
        <S.ContentBox>
          <S.TitleLine>
            <p>{SEARCH_TITLE}</p>
            {TRADEANDGROUP.map(data => {
              return (
                <S.SubTitle
                  key={data.id}
                  data-id={data.id}
                  onClick={subtitleClickHandler}
                  isClick={clickState(data.id)}
                >
                  {data.content}
                </S.SubTitle>
              );
            })}
          </S.TitleLine>
          <PostList
            type={type}
            setPage={setPage}
            page={page}
            postList={searchList}
            isHaveNextPage={isHaveNextPage}
          />
        </S.ContentBox>
      </S.Search>
      <Footer />
    </>
  );
};

export default Search;
