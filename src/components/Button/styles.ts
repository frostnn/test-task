import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../assets/img/arrow.svg';
import { device } from '../../constant/constant';
import { iPropsStyle } from './types';

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
  width: 100%;
`;
export const ChevronIcon = styled(ArrowIcon)<iPropsStyle>`
  stroke: ${({ theme }) => theme.colors.primary};
  transform: ${({ $toggle }) => (!$toggle ? 'rotate(90deg)' : 'rotate(270deg)')};
  margin: 0 5px;
  transition: 0.3s;
`;
export const Btn = styled.button`
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    opacity: 0.7;
  }
  @media ${device.mobileL} {
    font-size: 18px;
    margin: 30px 0;
  }
`;
