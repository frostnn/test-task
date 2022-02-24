import Slider from 'react-slick';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FEEDBACK_DATA_URL, defultSlide } from '../../constant/constant';
import { useFetch } from '../../hooks/useFetch';
import SliderItem from './SliderItem/SliderItem';
import Error from '../Error/Error';
import SlideArrow from './SliderArrow/SliderArrow';
import { SliderWrapper } from './styles';

const Sliders = () => {
  const { response, error, isLoading } = useFetch(FEEDBACK_DATA_URL);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: (
      <SlideArrow
        currentIndex={currentIndex}
        lengthSlider={response.length}
        direction="next"
        onClick
      />
    ),
    prevArrow: (
      <SlideArrow
        currentIndex={currentIndex}
        lengthSlider={response.length}
        direction="prev"
        onClick
      />
    ),
    beforeChange: (_: unknown, next: number) => setCurrentIndex(next),
  };

  return (
    <SliderWrapper>
      {error && <Error />}
      {isLoading ? (
        <SliderItem slider={defultSlide} />
      ) : (
        <Slider {...settings}>
          {response.map((slider, i) => (
            <SliderItem key={i} slider={slider} />
          ))}
        </Slider>
      )}
    </SliderWrapper>
  );
};

export default Sliders;
