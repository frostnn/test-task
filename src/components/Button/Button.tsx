import { BtnWrapper, Btn, ChevronIcon } from './styles';
import { iProps } from './types';

const Button: React.FC<iProps> = ({ children, fn, toggle }) => {
  return (
    <BtnWrapper>
      <Btn onClick={fn}>
        {children} <ChevronIcon $toggle={toggle} />
      </Btn>
    </BtnWrapper>
  );
};

export default Button;
