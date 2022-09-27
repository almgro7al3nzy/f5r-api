import styled from 'styled-components';

interface Props {
  id?: string;
}

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  max-width: 500px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 65%;
  padding: 30px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  gap: 15px;
  z-index: 2;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const ContentBox = styled.div<Props>`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid black;

  & input {
    width: 100%;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid black;
  }

  & textarea {
    width: 100%;
    height: ${props => (props.id ? 'calc(100% - 130px)' : 'calc(100% - 35px)')};
    font-size: 12px;
    padding-top: 16px;
    border: none;
    resize: none;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  & span {
    font-size: 12px;
  }

  & img {
    width: 55px;
    cursor: pointer;
  }

  & label {
    height: 55px;
  }

  & input {
    display: none;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;

  & button {
    width: 50%;
    height: 30px;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #754f44;
    cursor: pointer;
  }

  & button:first-child {
    background-color: white;
    color: #754f44;
  }

  & button:nth-child(2) {
    background-color: #754f44;
    color: white;
  }
`;
