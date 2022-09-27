import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header';
import { prevBtn } from '../../assets/writePost';
import { GROUPTITLE, MODIFYBTN, POSTTITLEANDHASHTAG, TRADETITLE } from '../../constance/writePost';
import Picture from './Picture';
import ExplainPost from './ExplainPost';
import PostInfo from './PostInfo';
import { useHistory, useLocation } from 'react-router';
import { CHECKBTN } from '../../constance/writePost';
import { useDispatch } from 'react-redux';
import {
  CARROT,
  GROUP,
  MODIFY_CARROT,
  MODIFY_GROUP,
  MODIFY_HASHTAG,
  PICTURE,
} from '../../modules/action/writePost/interface';

interface Props {
  title: string;
  description: string;
  price: number;
  tags: Array<string>;
  date: string;
  headCount: number;
  img: Array<File>;
  postImg: Array<string>;
  isSuccessSavePost: boolean | undefined;
  isSuccessSavePicture: boolean | undefined;
  isSuccessModifyPost: boolean | undefined;
  isSuccessModifyHashtag: boolean | undefined;
  setTitle: (payload: string) => void;
  setDescription: (payload: string) => void;
  setPrice: (payload: number) => void;
  setTags: (payload: Array<string>) => void;
  setDate: (payload: string) => void;
  setHeadCount: (payload: number) => void;
  setImg: (payload: Array<File>) => void;
}

const WritePost: FC<Props> = props => {
  const {
    title,
    description,
    price,
    postImg,
    tags,
    date,
    img,
    headCount,
    isSuccessSavePost,
    isSuccessModifyPost,
    isSuccessSavePicture,
    isSuccessModifyHashtag,
    setTitle,
    setDescription,
    setPrice,
    setTags,
    setDate,
    setHeadCount,
    setImg,
  } = props;
  const type = useLocation().pathname.slice(12);
  const dispatch = useDispatch();
  const history = useHistory();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [isModify, setIsModify] = useState<boolean>(false);

  useEffect(() => {
    if (postImg.length !== 0) setIsModify(true);
    else setIsModify(false);
  }, [postImg]);

  useEffect(() => {
    if (type === 'trade') {
      if (title !== '' && description !== '' && (img.length !== 0 || postImg.length !== 0))
        setDisabled(true);
      else setDisabled(false);
    } else {
      if (
        title !== '' &&
        description !== '' &&
        date !== '' &&
        headCount !== 0 &&
        (img.length !== 0 || postImg.length !== 0)
      )
        setDisabled(true);
      else setDisabled(false);
    }
  }, [title, description, date, headCount, img, postImg]);

  const postInfo = useMemo(() => {
    if (type === 'trade')
      return (
        <PostInfo
          id={'pay'}
          title={'가격'}
          content={price}
          placeholder={'상품 구입할 가격을 입력해 주세요 (숫자만)'}
          setPrice={setPrice}
        />
      );
    else if (type === 'group') {
      return (
        <>
          <PostInfo
            id={'pay'}
            title={'가격'}
            content={price}
            placeholder={'상품 구입할 가격을 입력해 주세요 (숫자만)'}
            setPrice={setPrice}
            setHeadCount={setHeadCount}
            setDate={setDate}
          />
          <PostInfo
            id={'people'}
            title={'인원'}
            placeholder={'공동구매할 인원수를 입력해 주세요 (숫자만)'}
            content={headCount}
            setPrice={setPrice}
            setHeadCount={setHeadCount}
            setDate={setDate}
          />
          <PostInfo
            id={'date'}
            title={'기간'}
            placeholder={'공동구매 기간을 입력해 주세요 (ex: 2021-11-18)'}
            content={date}
            setPrice={setPrice}
            setHeadCount={setHeadCount}
            setDate={setDate}
          />
        </>
      );
    }
  }, [type, price, date, headCount]);

  const titleInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const hashtagInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTags(event.currentTarget.value.split(','));
  };

  useEffect(() => {
    if (isSuccessSavePost) dispatch({ type: PICTURE });
    else if (isSuccessSavePost === false)
      alert('게시글 작성을 실패하였습니다. 입력하신 내용을 확인해주세요.');
  }, [isSuccessSavePost]);

  useEffect(() => {
    if (isSuccessSavePicture) {
      alert('게시글 작성을 성공하였습니다!');
      history.push('/post');
      window.location.reload();
    } else if (isSuccessSavePost === false) alert('게시글 작성을 실패하였습니다.');
  }, [isSuccessSavePicture, isSuccessSavePost]);

  useEffect(() => {
    if (isSuccessModifyPost) dispatch({ type: MODIFY_HASHTAG });
  }, [isSuccessModifyPost]);

  useEffect(() => {
    if (isSuccessModifyHashtag) {
      alert('게시글 수정을 성공하였습니다!');
      history.push('/post');
      window.location.reload();
    } else if (isSuccessModifyHashtag === false) alert('게시글 수정을 실패하였습니다.');
  }, [isSuccessModifyHashtag]);

  const checkBtnClickHandler = () => {
    if (isModify) {
      if (type === 'trade') dispatch({ type: MODIFY_CARROT });
      else if (type === 'group') dispatch({ type: MODIFY_GROUP });
    } else {
      if (type === 'trade') dispatch({ type: CARROT });
      else if (type === 'group') dispatch({ type: GROUP });
    }
  };

  const prevBtnClickHandler = () => {
    history.push('/post');
  };

  return (
    <>
      <Header />
      <S.WritePost>
        <S.ContentBox>
          <S.PrevLine>
            <img src={prevBtn} alt='prev' onClick={prevBtnClickHandler} />
            <p>돌아가기</p>
          </S.PrevLine>
          <S.Title>{type === 'trade' ? TRADETITLE : GROUPTITLE}</S.Title>
          {POSTTITLEANDHASHTAG.map(data => {
            return (
              <S.TitleAndInput isHashtag={data.id === 'hashtag' ? true : false}>
                <S.SubTitle>
                  {data.content}
                  {data.isNotNull && <span>*</span>}
                </S.SubTitle>
                <input
                  placeholder={data.placeholder}
                  onChange={
                    data.id === 'hashtag' ? hashtagInputChangeHandler : titleInputChangeHandler
                  }
                  defaultValue={data.id === 'hashtag' ? tags : title}
                  maxLength={data.id === 'title' ? 30 : undefined}
                />
              </S.TitleAndInput>
            );
          })}
          <Picture img={img} setImg={setImg} postImg={postImg} />
          <ExplainPost description={description} setDescription={setDescription} />
          {postInfo}
          <S.CheckBtn isClick={disabled} onClick={!disabled ? () => {} : checkBtnClickHandler}>
            <p>{isModify ? MODIFYBTN : CHECKBTN}</p>
          </S.CheckBtn>
        </S.ContentBox>
      </S.WritePost>
    </>
  );
};

export default WritePost;
