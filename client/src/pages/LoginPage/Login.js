import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Container } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../../hooks/useApi';

function Login() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const token = await getAccessTokenSilently({
                    audience: 'https://bbk-app.hu',
                    scope: 'read:events',
                });
                if (user && token) {
                    const res = await axios.post(
                        `${BASE_URL}/login`,
                        {
                            user,
                        },
                        {
                            headers: {
                                authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    setSuccess(res.data.success);
                }
            } catch (e) {
                console.log(e);
                setError(true);
            } finally {
                setLoading(false);
            }
        })();
    }, [getAccessTokenSilently, user]);

    useEffect(() => {
        if (success) {
            navigate('/');
        }
    }, [navigate, success]);

    if (loading) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Container>
        );
    }

    if (!isAuthenticated) {
        return <div>You need to login first</div>;
    }
    return !loading && error && <div>Ajjaj baj van :(</div>;
}

export default Login;
