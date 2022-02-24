import { TitleBlock } from './styles';
import { iProps } from './types';

const Title: React.FC<iProps> = ({ children }) => <TitleBlock>{children}</TitleBlock>;

export default Title;
