import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './hooks/useAuth';
import constructTheme from './theme';
import { DOMAIN, CLIENT_ID } from './config';

const theme = constructTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Auth0Provider
                    domain={DOMAIN}
                    clientId={CLIENT_ID}
                    redirectUri={window.location.origin}
                >
                    <AuthContextProvider>
                        <App />
                    </AuthContextProvider>
                </Auth0Provider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
