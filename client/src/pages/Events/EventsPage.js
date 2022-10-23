import React, { useEffect, useState } from 'react';
import { Grid, LinearProgress, Typography } from '@mui/material';
import PagePaper from '../../components/PagePaper';
import MediaCard from './components/MediaCard';
import { AXIOS_METHOD, useApi } from '../../hooks/useApi';

export const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [data, loading, error] = useApi(AXIOS_METHOD.GET, '/events?json');

    useEffect(() => {
        if (data) {
            setEvents(data.events);
        } else {
            setEvents([]);
        }
    }, [data]);
    return (
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
                                    date={e.date}
                                    description={e.description}
                                    place={e.place}
                                    name={e.name}
                                />
                            </Grid>
                        );
                    })
                ))}
        </PagePaper>
    );
};

export default EventsPage;
