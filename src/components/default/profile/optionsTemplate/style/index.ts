import styled, { keyframes } from 'styled-components';

interface Props {
  top: number;
  isShow: boolean;
}

export const moveUp = (top: number) => keyframes`
  from {
    top: ${top}px;
  }
  to {
    top: 100px;
  }
`;

export const moveDown = (top: number) => keyframes`
  from {
    top: 100px;
  }
  to {
    top: ${top}px;
    opacity: 0;
  }
`;

export const Wrapper = styled.div<Props>`
  max-width: 500px;
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  gap: 25px;
  background-color: white;
  padding: 0px 30px;
  border-top: 1px solid #ff9d86;
  border-bottom: 1px solid #ff9d86;
  cursor: pointer;
  top: ${props => props.top};
  animation: ${props => (props.isShow ? moveUp(props.top) : moveDown(props.top))} 0.75s;
  animation-fill-mode: forwards;
  z-index: 1;

  & p {
    font-size: 18px;
  }
`;
