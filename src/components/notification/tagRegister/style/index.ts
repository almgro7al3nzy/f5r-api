import styled from 'styled-components';
import { color } from '../../../../style';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 288px;
  max-width: 500px;
  margin: 0 auto;

  > h1 {
    margin: 8px 30px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const AlarmHeader = styled.article`
  width: 100%;
  padding: 16px 30px;
  height: 66px;
  background-color: #ffffff;
  border-bottom: solid 1px #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  position: sticky;
  top: 0;

  > div {
    width: 75px;
  }
`;

export const Register = styled.article`
  padding-bottom: 2px;
  border-bottom: solid 1px ${color.subColor};
  margin: 50px 30px 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > input {
    border: none;
    display: flex;
    flex: 0.99;
  }

  > button {
    width: 50px;
    height: 20px;
    color: #ffffff;
    background-color: ${color.subColor};
    font-size: 11px;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const TagList = styled.div`
  margin: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: solid 1px ${color.subColor};

  &:nth-last-child(1) {
    border: none;
  }
  
  > img {
    cursor: pointer;
  }
`;
