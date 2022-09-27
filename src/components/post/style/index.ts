import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const Post = styled.div`
  max-width: 500px;
  height: calc(100vh - 160px);
  margin: 0 auto;
  margin-top: 100px;
`;

export const ContentBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  position: relative;
`;

export const TitleLine = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-top: 10px;
  margin-bottom: 20px;
  > p:first-child {
    height: 30px;
    font-size: 23px;
    color: black;
  }
  > p:nth-child(2) {
    margin: 0px 2.7%;
  }
  > p:nth-child(3) {
    margin-right: 30%;
  }
  > p:nth-child(4) {
    margin-right: 5.4%;
  }
`;

export const SubTitle = styled.p<{
  isClick?: boolean;
}>`
  font-size: 11px;
  cursor: pointer;
  ${({ isClick }) => css`
    color: ${isClick ? 'black' : color.disabled};
  `}
`;

export const PostContent = styled.div`
  width: 331px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

export const NoContent = styled.p`
  font-size: 15px;
  text-align: center;
  margin: 30px 0px;
`;

export const PostImg = styled.img`
  width: 130px;
  height: 130px;
`;

export const PostInfo = styled.div`
  width: 177px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  > div:last-child {
    justify-self: end;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const PostTitle = styled.p`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PayAndLike = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div > p {
    font-size: 12px;
    margin-left: 8px;
  }
`;

export const DateAndPeople = styled(PayAndLike)``;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const HashtagLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  overflow: hidden;
`;

export const Hashtag = styled.div`
  height: 19px;
  border-radius: 10px;
  background-color: ${color.mainColor};
  display: flex;
  align-items: center;
  padding: 0px 8px;
  > p {
    color: white;
    font-size: 11px;
  }
`;

export const PostList = styled.div`
  height: calc(100% - 50px);
  overflow: auto;
`;

export const WriteBtn = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 31px;
  right: 15px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const WriteIcon = styled.img`
  width: 21px;
  height: 21px;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 20px;
    height: 20px;
  }
`;

export const PostWriteModal = styled.div`
  width: 270px;
  height: 300px;
  position: absolute;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
`;

export const ModalTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    font-size: 17px;
    font-weight: bold;
  }
`;

export const Carrot = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${color.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > p {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Group = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > p {
    color: ${color.mainColor};
    font-size: 16px;
    font-weight: bold;
  }
`;
