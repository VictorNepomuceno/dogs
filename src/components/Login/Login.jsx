import React from 'react';

import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import LoginForm from './LoginForm';
import styles from './Login.module.css';
import NotFound from '../NotFound';
import Head from '../helper/Head';

const login = () => {
    const { login } = React.useContext(UserContext);
    if (login === true) return <Navigate to="/conta" />;
    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="criar" element={<LoginCreate />} />
                    <Route path="perdeu" element={<LoginPasswordLost />} />
                    <Route path="resetar" element={<LoginPasswordReset />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </section>
    );
};

export default login;
