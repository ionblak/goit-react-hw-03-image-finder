import React, { Component } from 'react';

import ImageGallery from './Component/ImageGallery';
import Searchbar from './Component/Searchbar';
import BlockLoader from './Component/Loader';
import Button from './Component/Button';
import Modal from './Component/Modal';
import fetchImagesWithQuery from './api/imagesApi';

import styles from './App.module.css';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    value: '',
    error: null,
    isLoading: false,
    showModal: false,
    modalImgUrl: '',
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.images.length < this.state.images.length) {
      return 'tro-lo-lo';
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.value !== this.state.value) {
      this.fetchImages();
    }
    if (snapshot !== null) {
      this.scrollToBottom();
    }
  }

  fetchImages = () => {
    const { value, currentPage } = this.state;

    this.setState({ isLoading: true });

    fetchImagesWithQuery(value, currentPage)
      .then(imagesData => {
        this.setState(prevState => ({
          images: [...prevState.images, ...imagesData],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  getQueryValue = value => {
    this.setState({
      value,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  hendleButtonClick = () => {
    this.fetchImages();
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  toggleModal = (url = '') => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImgUrl: url,
    }));
  };

  render() {
    const { images, isLoading, error, showModal, modalImgUrl } = this.state;

    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.getQueryValue} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <BlockLoader />}
        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.toggleModal} />
        )}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.hendleButtonClick} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImgUrl} alt="modal img" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
