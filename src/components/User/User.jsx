import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import styles from './User.module.css';
import { UserContext } from '../../UserContext';

const User = () => {
    const { data } = React.useContext(UserContext);
    return (
        <section className={`${styles.section} container`}>
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="postar" element={<UserPhotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
            </Routes>
        </section>
    );
};

export default User;
