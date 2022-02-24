import styled from 'styled-components';
import { device } from '../../constant/constant';

export const TitleBlock = styled.div`
  font-size: 48px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.Stext};
  margin: 80px 0;
  @media ${device.mobileL} {
    margin: 33px 0;
    font-size: 24px;
  }
`;
