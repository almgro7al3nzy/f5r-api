import styled from 'styled-components';
import { color } from '../../../../../style/index';

export const Detail = styled.div`
  border-top: solid 1px ${color.subColor};
  margin: 0 18px;
  & hr {
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 20px 0;
  & span {
    width: 48px;
    min-width: 48px;
    height: 42px;
    font-size: 16px;
    display: flex;
    align-items: center;
    border-right: solid 1px ${color.subColor};
  }

  & div {
    min-width: 763px;
    display: flex;
    flex-direction: column;
  }

  & p {
    width: 100%;
    margin-left: 18px;
    padding-right: 18px;
    font-size: 15px;
  }

  & img {
    max-width: 30%;
    margin: 18px;
  }
`;

export const Answer = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    display: flex;
    gap: 0px 15px;
  }

  & p {
    font-size: 16px;
  }

  & div:last-child {
    display: flex;
    justify-content: flex-end;
  }

  & textarea {
    resize: none;
    border: none;
    margin: 10px 0;
    background-color: transparent;
    height: 76px;
    font-size: 15px;
  }

  & button {
    width: 60px;
    height: 30px;
    border-radius: 15px;
    border: solid 1px ${color.subColor};
    color: ${color.subColor};
    background-color: #ffffff;
    margin-bottom: 20px;
  }
`;
