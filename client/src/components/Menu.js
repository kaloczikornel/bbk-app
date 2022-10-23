import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Menu } from '@mui/icons-material';

export const MenuComponent = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <Button
                    color="inherit"
                    variant="text"
                    component={NavLink}
                    to={item.path}
                    key={item.label}
                >
                    {item.label}
                </Button>
            ))}
        </>
    );
};

export const DrawerComponent = ({ items }) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor="left">
                <List>
                    {items.map((item) => (
                        <ListItem key={item.label} onClick={() => setOpenDrawer(false)}>
                            <ListItemText>
                                <Button
                                    color="inherit"
                                    variant="text"
                                    fullWidth
                                    component={NavLink}
                                    to={item.path}
                                >
                                    {item.label}
                                </Button>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <Menu />
            </IconButton>
        </>
    );
};
