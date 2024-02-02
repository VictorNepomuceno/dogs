import React from 'react';
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const PhotoDelete = ({ id }) => {
    const { loading, request } = useFetch();

    async function handleClick() {
        const alert = window.confirm('Tem certeza que deseja deletar a foto?');
        if (alert) {
            const token = window.localStorage.getItem('token');
            const { url, options } = PHOTO_DELETE(token, id);
            const response = await request(url, options);
            if (response.ok) window.location.reload();
        }
    }
    return (
        <>
            {loading ? (
                <button disabled className={styles.delete}>
                    Deletar
                </button>
            ) : (
                <button onClick={handleClick} className={styles.delete}>
                    Deletar
                </button>
            )}
        </>
    );
};

export default PhotoDelete;
