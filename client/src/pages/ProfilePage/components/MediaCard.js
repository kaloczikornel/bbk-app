import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';
import SnackbarComponent from '../../../components/SnackbarComponent';

export function MediaCard({ name, place, date }) {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [message, setMessage] = useState('Siker!');
    const handleClose = () => {
        setOpenSnackbar(false);
    };
    return (
        <>
            <Card sx={{ maxWidth: 345, margin: '0 auto' }} elevation={6}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" marginTop={2}>
                        {`${place} ${format(new Date(date), 'yyyy-MM-ii')}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="error" size="small" onClick={() => setOpenSnackbar(true)}>
                        Lejelentkezés
                    </Button>
                </CardActions>
            </Card>
            <SnackbarComponent open={openSnackbar} message={message} handleClose={handleClose} />
        </>
    );
}
export default MediaCard;
