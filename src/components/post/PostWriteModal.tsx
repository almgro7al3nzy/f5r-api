import React from 'react';
import { useHistory } from 'react-router';
import * as S from './style';

const PostWriteModal = () => {
  const history = useHistory();
  const accessToken = localStorage.getItem('access_token');

  const carrotBtnClickHandler = () => {
    if (accessToken) {
      history.push('/write/post/trade');
      localStorage.removeItem('feed_id');
      window.location.reload();
    } else {
      alert('로그인이 필요합니다.');
      history.push('/auth');
    }
  };

  const groupBtnClickHandler = () => {
    if (accessToken) {
      history.push('/write/post/group');
      localStorage.removeItem('feed_id');
      window.location.reload();
    } else {
      alert('로그인이 필요합니다.');
      history.push('/auth');
    }
  };

  return (
    <S.Modal>
      <S.PostWriteModal>
        <S.ModalTitle>
          <p>어떤 게시글을 작성하시겠습니까?</p>
        </S.ModalTitle>
        <S.Carrot onClick={carrotBtnClickHandler}>
          <p>중고거래 게시물</p>
        </S.Carrot>
        <S.Group onClick={groupBtnClickHandler}>
          <p>공동구매 게시물</p>
        </S.Group>
      </S.PostWriteModal>
    </S.Modal>
  );
};

export default PostWriteModal;
