import React, { useEffect, useState } from 'react';
import * as S from './style';
import { search, alram } from '../../assets/header';
import useSearch from '../../util/hooks/search';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { SEARCH } from '../../modules/action/search/interface';
import notiCount from '../../util/api/header';

const Header = () => {
  const accessToken = localStorage.getItem('access_token');
  const [count, setCount] = useState<number>(0);
  const [divDisplay, setDivDisplay] = useState<string>('none');

  const { state, setState } = useSearch();
  const history = useHistory();
  const dispatch = useDispatch();
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState.setTitle(event.currentTarget.value);
  };

  const inputIconClickHandler = () => {
    setState.setSearchList();
    history.push('/search');
    dispatch({ type: SEARCH });
  };

  useEffect(() => {
    if (accessToken !== null) {
      notiCount
        .setNotiCount(accessToken)
        .then(res => {
          setCount(res.data.count);
        })
        .catch(err => {
          throw err;
        });
    } else {
      setDivDisplay('none');
    }
  }, []);

  useEffect(() => {
    if (count == 0) {
      setDivDisplay('none');
    } else {
      setDivDisplay('flex');
    }
  }, [count]);

  return (
    <S.Header>
      <S.Wrapper>
        <S.SearchInputBox>
          <S.SearchImg src={search} onClick={inputIconClickHandler} />
          <S.SearchInput type='text' onChange={inputChangeHandler} defaultValue={state.title} />
        </S.SearchInputBox>
        <S.AlramBox>
          <S.AlramImg
            src={alram}
            onClick={() => {
              history.push('/noti/list');
            }}
          />
          <S.AlramCheck style={{ display: divDisplay }}>
            <span>{count}</span>
          </S.AlramCheck>
        </S.AlramBox>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
