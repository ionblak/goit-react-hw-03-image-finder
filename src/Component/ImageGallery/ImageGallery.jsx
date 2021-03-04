import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  ImageGallery: {
    display: 'grid',
    maxWidth: 'calc(100vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gridGap: '16px',
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    listStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const ImageGallery = ({ images, onClick }) => {
  const classes = useStyles();
  return (
    <ul className={classes.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          url={image.webformatURL}
          titel={image.type}
          urlForModal={image.largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
