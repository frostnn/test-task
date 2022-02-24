import { ErrorBlock, ErrorBlockTitle, ErrorRefreshLink } from './styles';
import { iProps } from './types';

const Error: React.FC<iProps> = ({ textError = 'Упс, что-то пошло не так ☹️', linkHref = '/' }) => {
  return (
    <ErrorBlock>
      <ErrorBlockTitle>{textError}</ErrorBlockTitle>
      <ErrorRefreshLink href={linkHref}>Обновить</ErrorRefreshLink>
    </ErrorBlock>
  );
};

export default Error;
