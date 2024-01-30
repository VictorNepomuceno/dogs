import React from 'react';
import styles from './FeedPhotoItem.module.css';

const FeedPhotoItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photos} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.span}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotoItem;
