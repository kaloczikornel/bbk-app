import React, { useContext, useEffect, useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { LinearProgress } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../config';

const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
    const {
        isLoading,
        isAuthenticated,
        getAccessTokenSilently,
        logout,
        loginWithRedirect,
        getAccessTokenWithPopup,
        user,
    } = useAuth0();
    const [dbUser, setDbUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        (async () => {
            if (user) {
                const token = await getAccessTokenSilently({
                    audience: 'https://bbk-app.hu',
                });
                if (token) {
                    setAccessToken(token);
                }
            }
        })();
    }, [setAccessToken, getAccessTokenSilently, user]);

    useEffect(() => {
        (async () => {
            if (user && accessToken) {
                const res = await axios.get(`${BASE_URL}/user/${user.sub}`, {
                    headers: {
                        authorization: `Bearer ${accessToken}`,
                    },
                });
                setDbUser(res.data.user);
            }
        })();
    }, [user, accessToken]);

    const isAdmin = () => {
        if (!dbUser) {
            return false;
        }
        return dbUser.role === 'admin';
    };

    if (isLoading) {
        return <LinearProgress />;
    }

    return (
        <AuthContext.Provider
            value={{
                getAccessTokenSilently,
                isAuthenticated,
                logout,
                loginWithRedirect,
                getAccessTokenWithPopup,
                isAdmin,
                accessToken,
                dbUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
AuthContext.displayName = 'AuthContext';

export function useAuth() {
    return useContext(AuthContext);
}
