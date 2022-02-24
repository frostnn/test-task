import styled from 'styled-components';
import { device } from '../../constant/constant';

export const SliderWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  max-height: 700px;
  @media ${device.mobileL} {
    max-height: 850px;
  }
`;
