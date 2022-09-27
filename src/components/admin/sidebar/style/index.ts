import styled from 'styled-components';
import { color } from '../../../../style/index';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFEBE7;
  width: 380px;
  min-width: 380px;
  height: 100vh;
  border-right: solid 1px ${color.subColor};
  & div:first-child {
    padding: 40px 0;
  }
`;

export const Called = styled.div`
  width: 100%;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    border-top: solid 1px ${color.subColor};
  }
  & a:last-child {
    border-bottom: solid 1px ${color.subColor};
  }

  & p {
    font-size: 28px;
    font-weight: bold;
    color: ${color.subColor};
    margin: 0 0 0 20px;
  }
`;
