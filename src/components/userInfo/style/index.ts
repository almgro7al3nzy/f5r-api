import styled from 'styled-components';

interface Props {
  postType: string;
}

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: white;
  z-index: 1;
`;

export const UserInfoBox = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: fixed;
  background-color: white;
  z-index: 1;
`;

export const StudentInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

export const ReportButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  & img {
    width: 20px;
    height: 20px;
  }

  & span {
    color: #754f44;
    font-size: 10px;
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

export const AccountInfo = styled(DormitoryInfo)``;

export const WrittenPostBox = styled.div`
  background-color: white;

  & > span {
    padding-left: 30px;
    font-size: 18px;
    font-weight: bold;
    position: fixed;
    top: 320px;
    width: 100%;
    background-color: white;
    z-index: 1;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0;
  position: relative;
  top: 250px;

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
  top: 345px;
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
