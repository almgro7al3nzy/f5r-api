import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const Home = () => {
  const { push } = useHistory();

  useEffect(() => {
    push('main');
  }, []);
  return <div></div>;
};

export default Home;
