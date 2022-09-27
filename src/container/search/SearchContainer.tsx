import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Search from '../../components/search';
import { SEARCH } from '../../modules/action/search/interface';
import useSearch from '../../util/hooks/search';

const SearchContanier: FC = () => {
  const { state, setState } = useSearch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SEARCH });
  }, [state.type, state.page]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Search {...state} {...setState} />
    </Suspense>
  );
};

export default SearchContanier;
