import styled, { keyframes } from 'styled-components';

interface Props {
  postType: string;
}

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  position: relative;
  top: 160px;
  opacity: 0;
  animation: ${fadeIn} 0.25s ease 0.75s;
  animation-fill-mode: forwards;
  padding: 40px 0;

  & > p {
    opacity: 0;
  }
`;

export const TypeSelector = styled.div<Props>`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 10px 30px;
  position: fixed;
  top: 160px;
  background-color: white;
  z-index: 1;

  & > p {
    font-size: 11px;
    cursor: pointer;
  }

  & > p:first-child {
    opacity: ${props => (props.postType === 'trade' ? '1' : '0.5')};
  }

  & > p:last-child {
    opacity: ${props => (props.postType === 'group' ? '1' : '0.5')};
  }
`;
