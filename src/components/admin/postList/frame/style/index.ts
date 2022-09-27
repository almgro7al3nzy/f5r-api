import styled from 'styled-components';
import { color } from '../../../../../style/index';

export const Top = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;

  & div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & div:last-child {
    align-items: flex-end;
  }

  & h1 {
    color: ${color.subColor};
    margin: 0 16px;
  }

  & p {
    font-size: 20px;
    font-weight: bold;
    color: ${color.subColor};
    margin-left: 36px;
  }
`;
