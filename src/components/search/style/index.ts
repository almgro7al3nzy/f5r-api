import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const Search = styled.div`
  max-width: 500px;
  height: calc(100vh - 160px);
  margin: 0 auto;
  margin-top: 100px;
`;

export const ContentBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  position: relative;
`;

export const TitleLine = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-top: 10px;
  margin-bottom: 20px;
  > p:first-child {
    height: 30px;
    font-size: 23px;
    color: black;
  }
  > p:nth-child(2) {
    margin: 0px 2.7%;
  }
  > p:nth-child(3) {
    margin-right: 35.4%;
  }
`;

export const SubTitle = styled.p<{
  isClick?: boolean;
}>`
  font-size: 11px;
  cursor: pointer;
  ${({ isClick }) => css`
    color: ${isClick ? 'black' : color.disabled};
  `}
`;
