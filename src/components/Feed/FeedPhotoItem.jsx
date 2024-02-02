import React from 'react';
import styles from './FeedPhotoItem.module.css';
import Image from '../helper/Image';

const FeedPhotoItem = ({ photo, setModalPhoto }) => {
    function handleClick() {
        setModalPhoto(photo);
    }

    return (
        <li className={styles.photos} onClick={handleClick}>
            <Image src={photo.src} alt={photo.title} />
            <span className={styles.span}>{photo.acessos}</span>
        </li>
    );
};

export default FeedPhotoItem;
