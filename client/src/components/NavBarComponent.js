import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, useMediaQuery } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { DrawerComponent, MenuComponent } from './Menu';
import { useAuth } from '../hooks/useAuth';

const NavBarComponent = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const { isAuthenticated, logout, loginWithRedirect } = useAuth();

    const mainItems = [
        {
            path: '/',
            label: 'Főoldal',
        },
        {
            path: '/events',
            label: 'Események',
        },
        {
            path: '/blog',
            label: 'Blog',
        },
    ];
    if (isAuthenticated) {
        mainItems.push(
            {
                path: '/me',
                label: 'Profilom',
            },
            {
                path: '/test',
                label: 'TEST',
            }
        );
    }

    return (
        <AppBar>
            <Toolbar>
                {isMobile ? (
                    <DrawerComponent items={mainItems} />
                ) : (
                    <>
                        <span style={{ marginRight: 10 }}>
                            <img src="bbk_logo.png" alt="BBK" height="40" />
                        </span>
                        <MenuComponent items={mainItems} />
                    </>
                )}
                {isAuthenticated ? (
                    <IconButton
                        aria-label="logout"
                        size="large"
                        onClick={() => logout()}
                        sx={{ justifyContent: 'end', marginLeft: 'auto' }}
                    >
                        <LogoutIcon />
                    </IconButton>
                ) : (
                    <IconButton
                        aria-label="login"
                        size="large"
                        onClick={() => loginWithRedirect()}
                        sx={{ justifyContent: 'end', marginLeft: 'auto' }}
                    >
                        <LoginIcon />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBarComponent;
