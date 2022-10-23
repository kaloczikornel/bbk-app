import React, { useContext } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { LinearProgress } from '@mui/material';

const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
    const {
        isLoading,
        isAuthenticated,
        getAccessTokenSilently,
        logout,
        loginWithRedirect,
        getAccessTokenWithPopup,
    } = useAuth0();

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
