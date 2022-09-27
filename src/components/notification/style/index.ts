import styled from 'styled-components';
import { color } from '../../../style';

export const Wrapper = styled.div`
  max-width: 500px;
  min-width: 264px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  > div:last-child {
    margin-bottom: 30px;
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

  > div:first-child {
    width: 75px;
    > img {
      cursor: pointer;
    }
  }

  > div:last-child {
    width: 75px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color.mainColor};
    border: solid 1px ${color.mainColor};
    border-radius: 25px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`;
