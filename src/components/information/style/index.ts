import styled from 'styled-components';
import { color } from '../../../style';

interface Props {
  isFillAll: boolean;
}

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 20px 0;
  background-color: #ffcec3;
`;

export const InfoContainer = styled.form<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  & > button {
    width: 70%;
    height: 40px;
    margin-top: 20px;
    border: 2px solid #754f44;
    font-size: 20px;
    font-weight: bold;
    background-color: ${props => (props.isFillAll ? '#754f44' : '#ffffff')};
    color: ${props => (props.isFillAll ? '#ffffff' : '#754f44')};
    transition-duration: 0.5s;
    cursor: pointer;
  }
`;

export const DormitoryInfoBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  & span {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const AccountInfoBox = styled(DormitoryInfoBox)``;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;

  & input {
    width: 100%;
    border: 0;
    outline: none;
    padding: 5px 0px;
    border-bottom: 2px solid #d3d3d3;
  }

  & label {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;
    font-size: 16px;
    color: #d3d3d3;
    transition: 0.25s all;
    cursor: text;
  }

  & input:focus,
  & input:valid {
    border-color: ${color.mainColor};
  }

  & input:focus + label,
  & input:valid + label {
    font-size: 12px;
    top: -24px;
    color: ${color.mainColor};
  }
`;
