import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const ChatList = styled.div`
  max-width: 500px;
  height: calc(100vh - 160px);
  margin: 0 auto;
  margin-top: 100px;
`;

export const ContentBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
`;

export const AlarmLine = styled.div`
  width: 86.1%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding-top: 20px;
  > p {
    font-size: 20px;
    color: #754f44;
    font-weight: 500;
  }
  > img {
    width: 34px;
    height: 34px;
    cursor: pointer;
  }
`;

export const ToggleLine = styled.div`
  width: 100%;
  height: 36px;
  border-top: 1px solid #754f44;
  border-bottom: 1px solid #754f44;
  display: flex;
  margin-top: 10px;
`;

export const ToggleBtn = styled.div<{ isClick: boolean }>`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ isClick }) => css`
    background-color: ${isClick ? '#754f44' : 'white'};
  `}
  > p {
    font-size: 18px;
    font-weight: bold;
    ${({ isClick }) => css`
      color: ${isClick ? 'white' : '#754f44'};
    `}
  }
`;

export const ChatListContent = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #754f44;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  > div:nth-child(2) {
    width: 71%;
  }
`;

export const ChatTitle = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
`;

export const ChatContent = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 10px;
`;

export const ChatImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 35px;
`;

export const People = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  > img {
    width: 10px;
    height: 10px;
  }
  > p {
    font-size: 10px;
    color: #754f44;
    font-weight: bold;
  }
`;

export const ListContent = styled.div`
  width: 100%;
  height: calc(100% - 102px);
  overflow-y: auto;
`;

export const NoChatList = styled.p`
  font-size: 15px;
  text-align: center;
  margin-top: 60px;
`;
