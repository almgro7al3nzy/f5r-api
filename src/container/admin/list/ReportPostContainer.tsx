import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PostReport } from '../../../components/admin';
import { REPORT_POST_LIST } from '../../../modules/action/admin/interface';
import { useAdminReportPostList } from '../../../util/hooks/admin';

const ReportPostContainer = () => {
  const { state, setState } = useAdminReportPostList();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: REPORT_POST_LIST });
  }, [state.page]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostReport {...state} {...setState} />
    </Suspense>
  );
};

export default ReportPostContainer;
