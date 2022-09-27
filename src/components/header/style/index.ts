import styled from 'styled-components';
import { color } from '../../../style';

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: calc(constant(safe-area-inset-top) + 0px);
  top: calc(env(safe-area-inset-top) + 0px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7%;
  max-width: 500px;
  background-color: ${color.mainColor};
  z-index: 1;
  > div {
    margin-top: 20px;
  }
`;

export const SearchInputBox = styled.div`
  width: 70%;
  height: 36px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 5px;
`;

export const SearchImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  font-size: 18px;
`;

export const AlramBox = styled.div`
  width: 21px;
  height: 24px;
  position: relative;
`;

export const AlramImg = styled.img`
  width: 21px;
  height: 24px;
`;

export const AlramCheck = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 7px;
  background-color: red;
  position: absolute;
  top: 0px;
  right: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
  > span {
    color: white;
    font-size: 8px;
    -webkit-transform: scale(0.8);
    font-weight: 300;
  }
`;
