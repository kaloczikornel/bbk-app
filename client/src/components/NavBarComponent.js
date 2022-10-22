import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useMediaQuery } from '@mui/material';
import { DrawerComponent, MenuComponent } from './Menu';

const NavBarComponent = ({ theme }) => {
    const isMobile = useMediaQuery('(max-width:600px)');

    const mainItems = [
        {
            path: '/home',
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
        {
            path: '/me',
            label: 'Profilom',
        },
    ];

    return (
        <AppBar>
            <Toolbar>
                {isMobile ? (
                    <DrawerComponent items={mainItems} />
                ) : (
                    <>
                        <span style={{ marginRight: 10 }}>
                            <img src="https://via.placeholder.com/150" alt="BBK" height="40" />
                        </span>
                        <MenuComponent items={mainItems} />
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBarComponent;
