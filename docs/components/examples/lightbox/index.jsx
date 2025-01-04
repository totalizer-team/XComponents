import React, { useState } from 'react';

import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Lightbox from '@totalizer/xcomponents/Lightbox';

export default () => {
  const slides = [
    {
      title: '1',
      src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&fit=crop&auto=format&dpr=2',
      description: 'aaaaa',
    },
    {
      title: '2',
      src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=248&fit=crop&auto=format&dpr=2',
      description: 'bbbb',
    },
    {
      title: '3',
      src: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=248&fit=crop&auto=format&dpr=2',
      description: 'ccccc',
    },
  ];
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <>
      <ImageList sx={{ width: 500, height: 450 }}>
        {slides.map((item, i) => (
          <ImageListItem
            key={item.img}
            onClick={() => {
              setOpen(true);
              setIndex(i);
            }}
          >
            <img
              srcSet={`${item.src}`}
              src={`${item.src}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.description}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      ></Lightbox>
    </>
  );
};
