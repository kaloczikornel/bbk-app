import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './hooks/useAuth';
import constructTheme from './theme';

const theme = constructTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0Provider
                domain="dev-1ckx0xgt.us.auth0.com"
                clientId="p6AgBJyX7B3k7I8D2wLeNjo7PAm7m2lC"
                redirectUri={window.location.origin}
            >
                <AuthContextProvider>
                    <ThemeProvider theme={theme}>
                        <App />
                    </ThemeProvider>
                </AuthContextProvider>
            </Auth0Provider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
