import React from 'react';
import styles from './Photo.module.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { IMAGE_GET } from '../../api';
import Loading from '../helper/Loading';
import PhotoContent from './PhotoContent';

const Photo = () => {
    const { id } = useParams();
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = IMAGE_GET(id);
        request(url, options);
    }, [id, request]);

    if (error) return <Error error={error} />;
    if (loading) return <Loading />;
    if (data)
        return (
            <section className="container mainContainer">
                <PhotoContent single={true} data={data} />
            </section>
        );
    else return null;
};

export default Photo;
