import React from 'react';
import styles from './FeedPhotoItem.module.css';

const FeedPhotoItem = ({ photo }) => {
  return (
    <li className={styles.feedPhotoItem}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotoItem;
