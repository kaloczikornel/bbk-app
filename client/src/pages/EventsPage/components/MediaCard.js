import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AXIOS_METHOD, doApiCall } from '../../../hooks/useApi';
import SnackbarComponent from '../../../components/SnackbarComponent';
import { useAuth } from '../../../hooks/useAuth';
// TODO idea: while hovering on an event, flip it, and there is the long description
export default function MediaCard({ event, onEdit, apiCallback }) {
    const { dbUser, isAdmin } = useAuth();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const navigate = useNavigate();

    const handleDelete = async () => {
        await doApiCall(
            AXIOS_METHOD.DELETE,
            `/event/${event._id}`,
            setSnackbarOpen(true),
            {},
            {
                userId: dbUser._id,
            }
        );
        apiCallback();
    };
    const handleClose = () => {
        setSnackbarOpen(false);
    };
    const handleApply = async () => {
        await doApiCall(
            AXIOS_METHOD.POST,
            `/applicant/${event._id}/${dbUser._id}`,
            setSnackbarOpen(true)
        );
        apiCallback();
    };

    return (
        <>
            <SnackbarComponent
                open={snackbarOpen}
                type="success"
                handleClose={handleClose}
                message="Siker!"
            />
            <Card sx={{ maxWidth: 345, margin: '0 auto' }} elevation={6}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://www.picng.com/upload/wine/png_wine_17299.png"
                    alt="wine"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {event.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {event.description}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" marginTop={2}>
                        {`${event.place} ${format(new Date(event.date), 'yyyy-MM-dd H:mm')}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => handleApply()} size="small">
                        Jelentkezés
                    </Button>
                    {isAdmin() && (
                        <>
                            <IconButton
                                onClick={() => navigate(`/event/${event._id}`)}
                                color="secondary"
                                size="small"
                                sx={{ marginLeft: 'auto !important' }}
                            >
                                <ArrowForwardIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => onEdit(event)}
                                color="secondary"
                                size="small"
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => handleDelete()} color="error" size="small">
                                <DeleteIcon />
                            </IconButton>
                        </>
                    )}
                </CardActions>
            </Card>
        </>
    );
}
