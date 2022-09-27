import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const WritePost = styled.div`
  max-width: 500px;
  height: calc(100vh - 100px);
  margin: 0 auto;
  margin-top: 100px;
`;

export const ContentBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  overflow-y: auto;
`;

export const PrevLine = styled.div`
  width: 86.1%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 20px;
  > img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  > p {
    font-size: 16px;
  }
`;

export const Title = styled.p`
  width: 86.1%;
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const TitleAndInput = styled.div<{ isHashtag?: boolean }>`
  width: 86.1%;
  margin: 0 auto;
  margin-bottom: 30px;
  > input {
    width: 100%;
    height: 25px;
    border: none;
    padding: 0px 3px;
    ${({ isHashtag }) => css`
      border-bottom: 1px solid ${isHashtag ? color.mainColor : 'black'};
      color: ${isHashtag ? color.mainColor : 'black'};
    `}
    font-size: 14px;
    font-weight: bold;
    ::placeholder {
      font-size: 14px;
      ${({ isHashtag }) => css`
        color: ${isHashtag ? color.mainColor : '#808080'};
      `}
      font-weight: bold;
    }
  }
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  > span {
    font-size: 14px;
    color: red;
    margin-left: 4px;
  }
`;

export const PictureContent = styled.div`
  width: 86.1%;
  margin: 0 auto;
  margin-bottom: 30px;
  > div:nth-child(3) {
    display: flex;
  }
`;

export const PictureExplain = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const PicturePlusBtn = styled.label`
  width: 58px;
  height: 58px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > img {
    width: 22px;
    height: 22px;
  }
`;

export const ExplainPostContent = styled.div`
  width: 86.1%;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const ExplainPostTextarea = styled.textarea`
  width: 100%;
  height: 146px;
  background-color: #f3f3f3;
  padding: 6px;
  resize: none;
  border: none;
`;

export const PostInfoContent = styled.div`
  width: 86.1%;
  margin: 0 auto;
  margin-bottom: 30px;
  > input {
    width: 100%;
    height: 25px;
    border: none;
    padding: 0px 3px;
    font-size: 14px;
    font-weight: bold;
    border-bottom: 1px solid black;
    ::placeholder {
      font-size: 14px;
      color: '#808080';
      font-weight: bold;
    }
  }
`;

export const CheckBtn = styled.div<{ isClick: boolean }>`
  width: 86.1%;
  height: 68px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isClick }) => css`
    background-color: ${isClick ? '#754f44' : 'white'};
    cursor: ${isClick ? 'pointer' : 'default'};
  `}
  border: 1px solid #754f44;
  margin-bottom: 47px;
  > p {
    font-size: 20px;
    font-weight: bold;
    ${({ isClick }) => css`
      color: ${isClick ? 'white' : '#754f44'};
    `}
  }
`;

export const PreviewImg = styled.img`
  width: 58px;
  height: 58px;
`;
