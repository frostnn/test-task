import styled from 'styled-components';
import { device } from '../../../constant/constant';

export const PostItem = styled.a`
  background: ${({ theme }) => theme.colors.Slight};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  max-width: 33%;
  max-height: 650px;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 10px;
  @media ${device.laptop} {
    margin-bottom: 5px;
  }
  @media ${device.tablet} {
    max-width: 49%;
    margin-bottom: 10px;
  }
  @media ${device.mobileL} {
    max-width: 100%;
  }
`;
export const PostContent = styled.p`
  font-size: 24px;
  line-height: 130%;
  text-align: center;
  height: 90px;
  margin: 20px 0;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.Stext};
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.laptopL} {
    font-size: 22px;
  }
  @media ${device.laptop} {
    font-size: 20px;
    padding: 0 10px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
  }
`;
export const PostImg = styled.img`
  padding: 12px;
  border-radius: 12px;
  max-width: 464px;
`;
