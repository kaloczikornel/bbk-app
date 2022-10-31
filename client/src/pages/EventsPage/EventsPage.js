import React, { useEffect, useState } from 'react';
import { Button, Grid, LinearProgress, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import PagePaper from '../../components/PagePaper';
import MediaCard from './components/MediaCard';
import { AXIOS_METHOD, doApiCall, useApi } from '../../hooks/useApi';
import EventCreateEditModal from './components/EventCreateEditModal';
import { useAuth } from '../../hooks/useAuth';

export const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);
    const [data, loading, error, apiCallback] = useApi(AXIOS_METHOD.GET, '/events?json');
    const [editEvent, setEditEvent] = useState(null);
    const { isAuthenticated } = useAuth0();
    const { isAdmin } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            (async () => {
                const res = await doApiCall(
                    AXIOS_METHOD.GET,
                    '/events?json',
                    (response) => response,
                    setEvents
                );
                setEvents(res.events);
            })();
        }
        if (data) {
            setEvents(data.events);
        } else {
            setEvents([]);
        }
    }, [data, isAuthenticated]);

    useEffect(() => {
        if (!open) {
            apiCallback();
        }
    }, [apiCallback, open]);

    const onEdit = (event) => {
        setEditEvent(event);
        setOpen(true);
    };
    return (
        <>
            {isAdmin() && (
                <Button size="small" onClick={() => setOpen(true)}>
                    Esemény létrehozása
                </Button>
            )}
            <PagePaper title="Események">
                {loading && <LinearProgress />}
                {error && <Typography variant="h5">Hupszi valami gond van...</Typography>}
                {!loading &&
                    !error &&
                    (events.length === 0 ? (
                        <Typography variant="h5" marginTop="40px">
                            Sajnos jelenleg nincsen közelgő eseményünk! Gyere vissza később!
                        </Typography>
                    ) : (
                        events.map((e) => {
                            return (
                                <Grid item md={6}>
                                    <MediaCard
                                        event={e}
                                        onEdit={onEdit}
                                        apiCallback={() => apiCallback()}
                                    />
                                </Grid>
                            );
                        })
                    ))}
                <EventCreateEditModal
                    open={open}
                    handleClose={() => {
                        setOpen(false);
                        apiCallback();
                    }}
                    event={editEvent}
                />
            </PagePaper>
        </>
    );
};

export default EventsPage;
