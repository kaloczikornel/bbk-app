import React from 'react';
import { Alert, Snackbar } from '@mui/material';

export const SnackbarComponent = ({ open, handleClose, message, type }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};
export default SnackbarComponent;
