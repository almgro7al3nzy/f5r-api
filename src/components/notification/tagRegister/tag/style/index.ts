import styled from 'styled-components';
import { color } from '../../../../../style';

export const Tag = styled.div`
  background-color: ${color.mainColor};
  border-radius: 25px;
  display: flex;

  > span {
    margin: 4px 8px;
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
  }
`;
