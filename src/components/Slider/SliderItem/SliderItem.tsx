import {
  SliderItemBlock,
  SliderItemTitle,
  SliderItemName,
  SliderItemUsername,
  Ellipse,
  SliderItemContent,
} from './styles';
import { iProps } from './types';

const SliderItem: React.FC<iProps> = ({ slider }) => {
  const { name, text, instagram_username } = slider;
  return (
    <SliderItemBlock>
      <SliderItemContent>
        <SliderItemTitle>{text}</SliderItemTitle>
        <div>
          <SliderItemName>{name}</SliderItemName>,{' '}
          <SliderItemUsername>{instagram_username}</SliderItemUsername>
        </div>
      </SliderItemContent>
      <Ellipse />
    </SliderItemBlock>
  );
};

export default SliderItem;
