import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { CarouselOpts } from './types';

export default function ControlledCarousel(opts: CarouselOpts) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const renderedItems = opts.items.map(i => (
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={i.source}
        alt="Second slide"
        style={{ justifyContent: 'center', height: '100%' }}
      />
      <Carousel.Caption style={{ color: 'black' }}>
        <p>{i.caption}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {renderedItems}
    </Carousel>
  );
}
