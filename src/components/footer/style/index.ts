import styled from 'styled-components';
import { color } from '../../../style';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: calc(constant(safe-area-inset-bottom) + 0px);
  bottom: calc(env(safe-area-inset-bottom) + 0px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;
  max-width: 500px;
  background-color: ${color.mainColor};
`;

export const FooterTab = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.5;
`;

export const ImageWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabImage = styled.img`
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.25));
`;

export const TabText = styled.p`
  color: white;
  font-size: 10px;
  font-weight: bold;
`;
