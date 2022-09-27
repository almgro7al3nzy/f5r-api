import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Suggestion } from '../../../components/admin';
import { QUESTION_LIST } from '../../../modules/action/admin/interface';
import { useAdminQuestionList } from '../../../util/hooks/admin';

const QuestionContainer: FC = () => {
  const { state, setState } = useAdminQuestionList();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: QUESTION_LIST });
  }, [state.page]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Suggestion {...state} {...setState} />
    </Suspense>
  );
};

export default QuestionContainer;
