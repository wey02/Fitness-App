import { Box, Typography } from '@mui/material';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide styles

import BodyPart from './BodyPart';

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  // Customize your Splide options as needed
  const splideOptions = {
    type: 'slide',
    perPage: 3,
    gap:"3rem",
    
    breakpoints: {
      600: {
        perPage: 1,
      },
      768: {
        perPage: 1,
      },
    },
    
  };

  return (
    <Splide options={splideOptions} className='splide'>
      {data.map((item) => (
        <SplideSlide  key={item.id || item}>
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default HorizontalScrollBar;

