import { searchActionType } from '../../action/search';
import {
  SEARCH,
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
  TYPE,
  TYPECLICK,
  PAGE,
  TITLE,
  SEARCHLIST,
} from '../../action/search/interface';
import SearchState from './interface';

const initState: SearchState = {
  searchList: [],
  title: '',
  type: 'trade',
  typeClick: { trade: true, group: false },
  page: 0,
  isSuccessGetSearchList: undefined,
  isHaveNextPage: false,
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const searchReducer = (state: SearchState = initState, action: searchActionType): SearchState => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        isSuccessGetSearchList: undefined,
      };
    case SEARCH_SUCCESS:
      if (action.payload.length !== 0)
        return {
          ...state,
          searchList: state.searchList.concat(action.payload),
          isSuccessGetSearchList: true,
          isHaveNextPage: true,
        };
      else
        return {
          ...state,
          isSuccessGetSearchList: true,
          isHaveNextPage: false,
        };
    case SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetSearchList: false,
      };
    case TYPE:
      return {
        ...state,
        type: action.payload,
        searchList: [],
      };
    case TYPECLICK:
      return {
        ...state,
        typeClick: action.payload,
      };
    case PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SEARCHLIST:
      return {
        ...state,
        searchList: [],
      };
    default:
      return state;
  }
};

export default searchReducer;
