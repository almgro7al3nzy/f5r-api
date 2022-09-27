import styled from 'styled-components';
import { color } from '../../../style/index';

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & img {
    width: 150px;
    height: 150px;
  }

  & p {
    font-family: 'BMJUA';
    font-size: 32px;
    color: #ffffff;
    -webkit-text-stroke: 1.5px #000;
    font-weight: normal;
    letter-spacing: -2px;
    display: flex;
    align-items: flex-end;
  }

  & span {
    font-family: 'BMJUA';
    font-size: 38px;
    color: ${color.mainColor};
    -webkit-text-stroke: 1.5px #000;
  }
`;
