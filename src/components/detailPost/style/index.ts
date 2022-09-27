import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const DetailPost = styled.div`
  max-width: 500px;
  height: calc(100vh - 160px);
  margin: 0 auto;
  margin-top: 100px;
`;

export const ContentBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  overflow-y: auto;
  position: relative;
`;

export const TopLine = styled.div`
  width: 86%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  > div {
    display: flex;
    align-items: center;
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-right: 10px;
`;

export const PrevComment = styled.p`
  font-size: 16px;
`;

export const DetailContent = styled.div`
  width: 100%;
`;

export const TitleLine = styled.div`
  width: 86%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
`;

export const PostTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  width: 260px;
`;

export const Report = styled.div`
  width: 40px;
  > p {
    font-size: 10px;
    color: #754f44;
    text-align: center;
    margin-top: 3px;
  }
`;

export const ReportIcon = styled.img`
  width: 20px;
  height: 20px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

export const HashTageLine = styled.div`
  width: 86%;
  max-height: 53px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 0 auto;
  margin-bottom: 12px;
`;

export const HashTag = styled.div`
  height: 23px;
  border-radius: 24px;
  background-color: ${color.mainColor};
  color: white;
  padding: 0px 8px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserInfoAndChatLine = styled.div`
  width: 86%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  > div:first-child {
    cursor: pointer;
  }
  > div:first-child > p {
    font-size: 14px;
  }
  > div:first-child > p:first-child {
    font-weight: bold;
  }
`;

export const ChattingBtn = styled.div`
  width: 75px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid ${color.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    color: ${color.mainColor};
  }
`;

export const PostImgSlider = styled.div`
  width: 100%;
  height: 281px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  > p {
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const PostContent = styled.p`
  width: 86%;
  font-size: 16px;
  margin: 10px auto;
`;

export const DetailPostFooter = styled.footer`
  width: 100%;
  max-width: 500px;
  height: 60px;
  display: flex;
  position: fixed;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
  bottom: calc(constant(safe-area-inset-bottom) + 0px);
  bottom: calc(env(safe-area-inset-bottom) + 0px);
  background-color: #f3f3f3;
  > div {
    width: 86%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }
`;

export const PayAndLikeIcon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

export const PayContent = styled.div`
  display: flex;
  gap: 8px;
  > p {
    font-size: 18px;
  }
`;

export const LikeContent = styled.div`
  width: 28px;
  > p {
    font-size: 11px;
    color: ${color.disabled};
    text-align: center;
    margin-top: -5px;
  }
`;

export const DateAndPeople = styled.div`
  margin-right: 10px;
  > div {
    display: flex;
    > img {
      width: 20px;
      height: 16px;
      margin-right: 4px;
    }
    > p {
      font-size: 11px;
    }
  }
`;

export const DateAndPeopleIcon = styled.img`
  width: 20px;
  height: 16px;
`;

export const PostDeleteModal = styled.div`
  width: 250px;
  height: 150px;
  background-color: white;
  position: absolute;
  right: calc(50% - 125px);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const DeleteTitle = styled.p`
  font-size: 16px;
`;

export const DeleteExplain = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

export const CheckBtnLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const CheckBtn = styled.div`
  width: 50px;
  height: 20px;
  background-color: ${color.mainColor};
  border-radius: 15px;
  font-size: 11px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CancleBtn = styled(CheckBtn)`
  color: #fbfbfb;
  background-color: #c4c4c4;
`;

export const Container = styled.div`
  width: 281px;
  height: 281px;
  overflow: hidden;
  position: relative;
`;

export const SliderBox = styled.div<{ length: number }>`
  ${({ length }) => css`
    width: calc(100% * ${length});
  `}
  height: 100%;
  position: absolute;
  top: 0;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderItem = styled.div<{ length: number }>`
  ${({ length }) => css`
    width: calc(100% / ${length});
  `}
  height: 100%;
  > img {
    width: 100%;
    height: 100%;
  }
`;
