import React, { FC, useMemo } from 'react';
import * as S from './style';
import { fillLike, pay, dateIcon, peopleIcon } from '../../assets/post';
import { grayLike } from '../../assets/detailPost';
import { useDispatch } from 'react-redux';
import { POST_LIKE, POST_LIKE_DELETE } from '../../modules/action/detailPost/interface';

interface Props {
  type: string;
  money: number;
  heart: number;
  date: string;
  people: string;
  like: boolean;
}

const DetailPostFooter: FC<Props> = props => {
  const { type, money, heart, date, people, like } = props;
  const dispatch = useDispatch();

  const groupType = useMemo(() => {
    if (type === 'group')
      return (
        <S.DateAndPeople>
          <div>
            <img src={dateIcon} alt='date' />
            <p>~{date}</p>
          </div>
          <div>
            <img src={peopleIcon} alt='people' />
            <p>{people}명</p>
          </div>
        </S.DateAndPeople>
      );
  }, [type, date, people]);

  const heartIconClickHandler = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    console.log(event.currentTarget.dataset.id);
    if (event.currentTarget.dataset.id === 'false') dispatch({ type: POST_LIKE });
    else if (event.currentTarget.dataset.id === 'true') dispatch({ type: POST_LIKE_DELETE });
  };

  const heartIcon = useMemo(() => {
    if (like)
      return <S.PayAndLikeIcon src={fillLike} data-id={'true'} onClick={heartIconClickHandler} />;
    else
      return <S.PayAndLikeIcon src={grayLike} data-id={'false'} onClick={heartIconClickHandler} />;
  }, [like]);

  return (
    <S.DetailPostFooter>
      <div>
        <S.PayContent>
          {groupType}
          <S.PayAndLikeIcon src={pay} />
          <p>{money}원</p>
        </S.PayContent>
        <S.LikeContent>
          {heartIcon}
          <p>{heart}개</p>
        </S.LikeContent>
      </div>
    </S.DetailPostFooter>
  );
};

export default DetailPostFooter;
