import { ArrowIconStyled, ButtonArrow } from './styles';
import { iProps } from './types';

const SlideArrow: React.FC<iProps> = ({
  onClick,
  currentIndex,
  lengthSlider,
  direction = 'next',
}) => {
  let isDisabled: boolean;
  if (direction === 'next') {
    isDisabled = currentIndex === lengthSlider - 1 ? true : false;
  } else {
    isDisabled = currentIndex === 0 ? true : false;
  }

  return (
    <ButtonArrow onClick={onClick} disabled={isDisabled} direction={direction}>
      <ArrowIconStyled direction={direction} />
    </ButtonArrow>
  );
};

export default SlideArrow;
