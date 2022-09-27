import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin-bottom: 60px;

  > div:nth-child(4) {
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 30px 0;
  background-color: #ffcec3;
`;

export const PostInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6px;

  > div {
    width: 331px;
    display: flex;
    margin: 0 auto;

    > h1 {
      font-size: 24px;
      font-weight: normal;
      display: flex;
      align-items: flex-start;
    }

    > a {
      color: #000000;
      margin-top: 12px;
    }

    > span {
      font-size: 14px;
      display: flex;
      align-items: flex-end;
    }
  }

  > div:nth-child(1) {
    justify-content: flex-start;
  }

  > div:nth-child(4) {
    justify-content: flex-end;
  }
`;
