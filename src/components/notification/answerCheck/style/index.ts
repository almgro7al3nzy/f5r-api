import styled from 'styled-components';
import { color } from '../../../../style';

export const Modal = styled.div`
  max-width: 500px;
  margin: auto;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 80%;
    min-width: 200px;
    background-color: #fff;
    height: 70%;
    border-radius: 8px;
    padding: 30px;
    display: flex;
    flex-direction: column;

    > div {
      border: 1px solid ${color.subColor};
      padding: 10px;
      flex: 1;
      overflow-y: scroll;
      margin: 10px 0;
    }

    > button {
      width: 100%;
      height: 36px;
      font-size: 16px;
      border: none;
      background-color: ${color.subColor};
      color: #fff;
    }
  }
`;
