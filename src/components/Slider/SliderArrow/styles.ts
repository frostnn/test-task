import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../../assets/img/arrow.svg';
import { device } from '../../../constant/constant';
import { iPsopsStyle } from './types';

export const ArrowIconStyled = styled(ArrowIcon)<iPsopsStyle>`
  stroke: ${({ theme }) => theme.colors.Slight};
  transition: 0.3s;
  ${({ direction }) => (direction === 'prev' ? 'transform: rotate(180deg)' : '')};
`;

export const ButtonArrow = styled.button<iPsopsStyle>`
  background: ${({ theme }) => theme.colors.Plight};
  border-radius: 50%;
  border: none;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  right: 80px;
  bottom: 85px;
  ${({ direction }) => (direction === 'prev' ? 'right: 148px' : '')};
  ${({ direction }) => (direction === 'prev' ? 'z-index: 999' : '')};
  &:active {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 0px 0px #e6e6e6,
      0px 1px 5px rgba(99, 114, 130, 0.15);
    ${ArrowIconStyled} {
      stroke: ${({ theme }) => theme.colors.Stext};
    }
  }
  &:focus {
    outline: none;
    border: 1px solid #6527d9;
    filter: drop-shadow(0px 20px 40px rgba(99, 114, 130, 0.08));
    ${ArrowIconStyled} {
      stroke: ${({ theme }) => theme.colors.Stext};
    }
  }
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05), 0px 40px 40px rgba(10, 0, 32, 0.08);
    ${ArrowIconStyled} {
      stroke: ${({ theme }) => theme.colors.Stext};
    }
  }
  &:disabled {
    opacity: 0.4;
    ${ArrowIconStyled} {
      stroke: #b3b3b3;
    }
  }
  @media ${device.laptop} {
    bottom: 25px;
  }
  @media ${device.mobileL} {
    right: 0;
    left: ${({ direction }) => (direction === 'prev' ? '37px' : '110px')};
  }
  @media ${device.mobileL} {
    bottom: 10px;
  }
`;
