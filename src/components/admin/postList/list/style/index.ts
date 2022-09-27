import styled from 'styled-components';
import { color } from '../../../../../style/index';

export const MainContest = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 0 8px 0;
  height: 66px;
  align-items: center;
  justify-content: auto;
  border-top: solid 1px ${color.subColor};
  margin: 0;

  & p {
    color: #000000;
    font-size: 14px;
    width: 66px;
    min-width: 66px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & h3 {
    color: #000000;
    font-weight: normal;
    width: 708px;
    min-width: 534px;
    height: 42px;
    padding: 0 18px;
    font-size: 18px;
    border-left: solid 1px ${color.subColor};
    display: flex;
    align-items: center;
  }

  & div {
    width: 280px;
    display: flex;
    justify-content: space-between;
    margin-right: 18px;
    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 66px;
      margin: 0;
      & img {
        width: 17px;
        height: 13px;
      }
    }
  }
`;
