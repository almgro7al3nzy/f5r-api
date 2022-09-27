import styled from 'styled-components';

export const List = styled.div`
  margin: 0 30px 0 20px;
  display: flex;
  gap: 6px;
  cursor: pointer;

  > div:first-child {
    padding-top: 6px;
    > div {
      width: 6px;
      height: 6px;
      border-radius: 25px;
    }
  }

  > div:last-child {
    display: flex;
    gap: 10px;

    > div:first-child {
      padding-top: 2px;
    }
  }

  & span {
    font-size: 14px;
    color: #6c6c6c;
  }

  & p {
    font-size: 16px;
    color: #000000;
  }
`;
