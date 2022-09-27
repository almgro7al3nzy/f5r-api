import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { color } from '../../../style';

interface Props {
  isHideAccount: boolean;
}

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  margin-top: 100px;
`;

export const UserInfoBox = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${fadeIn} 0.25s;
`;

export const StudentInfo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  font-weight: bold;

  & span:first-child {
    font-size: 32px;
  }

  & span:last-child {
    font-size: 18px;
  }
`;

export const DormitoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & span:first-child {
    font-size: 12px;
    font-weight: bold;
  }

  & span:nth-child(2) {
    font-size: 14px;
  }
`;

export const AccountBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const AccountInfo = styled(DormitoryInfo)<Props>`
  & span:first-child,
  & span:nth-child(2) {
    opacity: ${props => (props.isHideAccount ? 0.25 : 1)};
  }

  & span:nth-child(3) {
    position: absolute;
    bottom: -15px;
    font-size: 10px;
    color: #ff4c3a;
  }
`;

export const AccountCheckbox = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  & input {
    width: 16px;
    height: 16px;
  }

  & input:checked {
    background-color: ${color.mainColor};
  }

  & label {
    font-size: 12px;
  }
`;

export const DetailPage = styled(Link)`
  height: 60px;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 0px 30px;
  border-top: 1px solid #ff9d86;
  animation: ${fadeIn} 0.25s;

  & span {
    color: black;
    font-size: 18px;
  }
`;

export const Suggestion = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 0px 30px;
  border-top: 1px solid #ff9d86;
  animation: ${fadeIn} 0.25s;
  cursor: pointer;

  & span {
    color: black;
    font-size: 18px;
  }
`;

export const Access = styled(Suggestion)`
  border-bottom: 1px solid #ff9d86;
`;
