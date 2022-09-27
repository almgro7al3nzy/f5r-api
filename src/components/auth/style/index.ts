import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 500px;
  height: calc(100vh - 160px);
  margin: 0 auto;
  margin-top: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 40px;
  padding: 20px 0;
  background-color: #ffcec3;
`;

export const MainText = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const AuthLinkContainer = styled.a`
  width: 300px;
  border: 1px solid #e3e3e4;
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;

  & p {
    width: 240px;
    text-align: center;
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e3e3e4;
`;

export const BottomTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  border-top: 1px solid #c4c4c4;
  position: absolute;
  bottom: 0px;

  & p {
    color: black;
    font-size: 11px;
    text-align: center;
    font-family: Roboto;
  }

  & a {
    color: black;
    text-decoration: underline;
  }
`;
