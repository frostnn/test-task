import styled from 'styled-components';

export const ErrorBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 80px;
`;
export const ErrorBlockTitle = styled.div`
  color: #333;
  font-size: 32px;
`;

export const ErrorRefreshLink = styled.a`
  color: ${({ theme }) => theme.colors.Ptext};
  background: ${({ theme }) => theme.colors.Plight};
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 20px;
  text-decoration: none;
  margin: 10px;
  transition: 0.3s;
  :hover {
    opacity: 0.7;
  }
`;
