import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const Main = styled.div`
  width: 1054px;
  min-width: 870px;
  height: 784px;
  margin: 125px 80px 60px 480px;
`;

export const Chart = styled.div`
  width: 100%;
  margin: 50px 0px 0px;

  > article:nth-child(2) {
    height: 628px;
    overflow-y: scroll;
    > article:nth-child(odd) {
      background-color: #ffffff;
    }

    > article:nth-child(even) {
      background-color: rgba(117, 79, 68, 0.1);
    }
  }
`;

export const ChartTitle = styled.article`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 0 8px 0;
  padding: 0 5px 0 0;

  & p {
    color: #000000;
    font-size: 14px;
    width: 66px;
    min-width: 66px;
    display: flex;
    justify-content: center;
  }
  & h3 {
    color: #000000;
    font-size: 22px;
    font-weight: normal;
    width: 708px;
    min-width: 534px;
    padding: 0 18px;
  }
  & div {
    width: 280px;
    display: flex;
    justify-content: space-between;
    margin-right: 18px;
  }
`;
