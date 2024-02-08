import React from 'react';
import Feed from './Feed/Feed';
import Head from './helper/Head';

const Home = () => {
    return (
        <section className="container mainContainer">
            <Head title="Fotos" description="Site Dogs Rede Social para cachorros" />
            <Feed />
        </section>
    );
};

export default Home;
