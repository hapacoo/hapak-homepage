import { Carousel } from 'antd';
import { SliderImage, SliderWrapper } from './FrontStyle';

export default function FrontIndex(): JSX.Element {
  return (
    <Carousel autoplay dotPosition="top">
      <SliderWrapper>
        <SliderImage src="image/hapak/front/HP-F-01.JPG" />
      </SliderWrapper>
      <SliderWrapper>
        <SliderImage src="image/hapak/front/HP-F-02.jpg" />
      </SliderWrapper>
      <SliderWrapper>
        <SliderImage src="image/hapak/front/HP-F-03.JPG" />
      </SliderWrapper>
    </Carousel>
  );
}
