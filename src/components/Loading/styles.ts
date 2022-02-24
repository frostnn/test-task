import styled from 'styled-components';
import { ReactComponent as Loading } from '../../assets/img/loading.svg';

export const LoadingIconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 80px;
`;
export const LoadingIcon = styled(Loading)``;
