import styled from 'styled-components';
import { device } from '../../../constant/constant';

export const SliderItemBlock = styled.div`
  border-radius: 12px;
  height: 700px;
  color: ${({ theme }) => theme.colors.Ptext};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 80px;
  @media ${device.tablet} {
    margin: 0 15px;
    align-items: normal;
  }
  @media ${device.mobileL} {
    height: 850px;
  }
`;

export const SliderItemTitle = styled.div`
  font-size: 38px;
  line-height: 120%;
  letter-spacing: 0.8px;
  margin-bottom: 32px;
  @media ${device.laptopL} {
    font-size: 34px;
  }
  @media ${device.tablet} {
    font-size: 28px;
    margin-top: 20px;
  }
  @media ${device.mobileL} {
    font-size: 24px;
  }
`;
export const SliderItemName = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.2px;
`;
export const SliderItemUsername = styled.span`
  font-weight: 100;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.2px;
`;

export const Ellipse = styled.div`
  background: linear-gradient(41.63deg, #ffffff 8.13%, rgba(255, 255, 255, 0) 84.6%);
  opacity: 0.1;
  width: 388px;
  height: 388px;
  border-radius: 50%;
  @media ${device.laptop} {
    display: none;
  }
`;
export const SliderItemContent = styled.div`
  max-width: 60%;
  @media ${device.laptop} {
    max-width: 100%;
  }
`;
