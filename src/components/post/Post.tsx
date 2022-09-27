import React, { FC, useState } from 'react';
import * as S from './style';
import Header from '../header';
import Footer from '../footer';
import { POST_TITLE, SUBTITLE } from '../../constance/post';
import PostList from './PostList';
import { write } from '../../assets/post';
import { postListType } from '../../models/dto/response/postResponse';
import PostWriteModal from './PostWriteModal';

interface Props {
  postList: Array<postListType>;
  type: string;
  typeClick: { trade: boolean; group: boolean };
  order: { newest: boolean; like: boolean };
  page: number;
  isHaveNextPage: boolean;
  setType: (payload: string) => void;
  setOrder: (payload: { newest: boolean; like: boolean }) => void;
  setPage: (payload: number) => void;
  setTypeClick: (payload: { trade: boolean; group: boolean }) => void;
}

const Post: FC<Props> = props => {
  const {
    postList,
    type,
    typeClick,
    order,
    page,
    isHaveNextPage,
    setType,
    setOrder,
    setPage,
    setTypeClick,
  } = props;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

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
      case 'newest':
        setOrder({ newest: true, like: false });
        setPage(0);
        break;
      case 'like':
        setOrder({ newest: false, like: true });
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
      case 'newest':
        return order.newest;
      case 'like':
        return order.like;
    }
  };

  const writeBtnClickHandler = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <Header />
      <S.Post>
        <S.ContentBox>
          {isOpenModal && <PostWriteModal />}
          <S.TitleLine>
            <p>{POST_TITLE}</p>
            {SUBTITLE.map(data => {
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
            postList={postList}
            setPage={setPage}
            page={page}
            order={order}
            isHaveNextPage={isHaveNextPage}
          />
          <S.WriteBtn onClick={writeBtnClickHandler}>
            <S.WriteIcon src={write} />
          </S.WriteBtn>
        </S.ContentBox>
      </S.Post>
      <Footer />
    </>
  );
};

export default Post;
