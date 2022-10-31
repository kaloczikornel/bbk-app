import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';
import { useAuth0 } from '@auth0/auth0-react';
import SnackbarComponent from '../../../components/SnackbarComponent';
import { AXIOS_METHOD, doApiCall } from '../../../hooks/useApi';

export function MediaCard({ event, apiCallback }) {
    const { user } = useAuth0();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [message, setMessage] = useState('Siker!');
    const handleClose = () => {
        setOpenSnackbar(false);
    };
    const handleDelete = async () => {
        await doApiCall(
            AXIOS_METHOD.DELETE,
            `/applicant/${event._id}/${user.sub}`,
            setOpenSnackbar(true)
        );
        apiCallback();
    };
    return (
        <>
            <Card sx={{ maxWidth: 345, margin: '0 auto' }} elevation={6}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {event.name}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" marginTop={2}>
                        {`${event.place} ${format(new Date(event.date), 'yyyy-MM-ii')}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="error" size="small" onClick={() => handleDelete()}>
                        Lejelentkezés
                    </Button>
                </CardActions>
            </Card>
            <SnackbarComponent open={openSnackbar} message={message} handleClose={handleClose} />
        </>
    );
}
export default MediaCard;
