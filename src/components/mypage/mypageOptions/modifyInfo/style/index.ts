import styled, { keyframes } from 'styled-components';
import { color } from '../../../../../style';

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ModifyForm = styled.form`
  width: 100%;
  position: relative;
  top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  opacity: 0;
  animation: ${fadeIn} 0.25s ease 0.75s;
  animation-fill-mode: forwards;

  & button {
    width: 25%;
    height: 30px;
    border: 1px solid ${color.mainColor};
    border-radius: 20px;
    background-color: white;
    color: ${color.mainColor};
    font-size: 14px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  width: 70%;
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
