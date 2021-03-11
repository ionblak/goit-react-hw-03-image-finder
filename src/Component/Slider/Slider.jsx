import React, { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  buttonPrevious: {
    background: 'transparent',
    border: 'none',
    position: 'absolute',
    top: '50%',
    left: '10%',
    transform: ' translate(-50%, -50%)',
  },
  buttonNext: {
    background: 'transparent',
    border: 'none',
    position: 'absolute',
    top: '50%',
    left: '90%',
    transform: ' translate(-50%, -50%)',
  },
});

const Slider = ({ modalImgUrl, images }) => {
  const classes = useStyles();
  const modalImgUrlArray = images.map(item => item.largeImageURL);
  const index = modalImgUrlArray.indexOf(modalImgUrl);

  const [currentIndex, setCurrentIndex] = useState(index);

  const handleNextImg = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const handlePreviousIndex = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'ArrowRight') {
      handleNextImg();
    }
    if (e.code === 'ArrowLeft') {
      handlePreviousIndex();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const currentImgUrl = images[currentIndex].largeImageURL;
  return (
    <>
      <button
        className={classes.buttonPrevious}
        type="button"
        onClick={handlePreviousIndex}
      >
        <ArrowBackIosIcon color="primary" fontSize="large" />
      </button>

      <img src={currentImgUrl} alt="modal images" />

      <button
        className={classes.buttonNext}
        type="button"
        onClick={handleNextImg}
      >
        <ArrowForwardIosIcon color="primary" fontSize="large" />
      </button>
    </>
  );
};

export default Slider;
