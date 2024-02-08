import React from 'react';
import Input from '../forms/Input';
import useForm from '../../Hooks/useForm';
import Button from '../forms/Button';
import useFetch from '../../Hooks/useFetch';
import { PASSOWRD_RESET } from '../../api';
import Error from '../helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../helper/Head';

const LoginPasswordReset = () => {
    const [login, setLogin] = React.useState('');
    const [key, setKey] = React.useState('');
    const password = useForm('password');
    const { error, loading, request } = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');
        if (key) setKey(key);
        if (login) setLogin(login);
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        if (password.validate()) {
            const { url, options } = PASSOWRD_RESET({
                login,
                key,
                password: password.value,
            });
            const { response } = await request(url, options);
            if (response.ok) navigate('/login');
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Resetar Senha" />
            <h1 className="title">Resete a senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Nova senha" type="password" name="password" {...password} />
                {loading ? (
                    <Button disabled>Resetando...</Button>
                ) : (
                    <Button>Resetar</Button>
                )}
            </form>
            <Error error={error} />
        </section>
    );
};

export default LoginPasswordReset;
