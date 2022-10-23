import React from 'react';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';

function Login() {
    const { loginWithRedirect } = useAuth();
    return (
        <Paper
            sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 450,
                height: 300,
                padding: 5,
            }}
            elevation={12}
        >
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography variant="h3" textAlign="center">
                    Üdv a BBK oldalán
                </Typography>
                <Button fullWidth onClick={() => loginWithRedirect()}>
                    Bejelentkezés
                </Button>
            </Stack>
        </Paper>
    );
}

export default Login;
