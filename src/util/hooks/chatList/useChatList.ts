import useSelectState from '../default';

const useChatList = () => {
  const state = useSelectState().chatList;
  const setState = {};
  return { state, setState };
};

export default useChatList;
