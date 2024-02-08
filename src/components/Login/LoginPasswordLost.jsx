import React from 'react';
import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSOWRD_LOST } from '../../api';
import Error from '../helper/Error';
import Head from '../helper/Head';

const LoginPasswordLost = () => {
    const login = useForm();
    const { data, loading, request, error } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();
        if (login.validate()) {
            const { url, options } = PASSOWRD_LOST({
                login: login.value,
                url: window.location.href.replace('perdeu', 'resetar'),
            });
            request(url, options);
        }
    }

    return (
        <section>
            <Head title="Senha" />
            <h1 className="title">Perdeu a senha?</h1>
            {data ? (
                <p style={{ color: '#4c1' }}>{data}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Input label="Email / Usuário" type="text" name="login" {...login} />
                    {loading ? (
                        <Button disabled>Enviando...</Button>
                    ) : (
                        <Button>Enviar e-mail</Button>
                    )}
                </form>
            )}
            <Error error={error} />
        </section>
    );
};

export default LoginPasswordLost;
