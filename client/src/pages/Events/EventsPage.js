import React from 'react';
import PagePaper from '../../components/PagePaper';
import MediaCard from './components/MediaCard';
import { Grid } from '@mui/material';
const MOCK_EVENTS = [
    {
        name: 'Event Name',
        place: 'hely',
        date: new Date(),
        description: 'ez egy hosszú leírás ami arról szól, hogy milyen fasza ez a rendezvény',
    },
    {
        name: 'Event Name',
        place: 'hely',
        date: new Date(),
        description: 'ez egy hosszú leírás ami arról szól, hogy milyen fasza ez a rendezvény',
    },
    {
        name: 'Event Name',
        place: 'hely',
        date: new Date(),
        description: 'ez egy hosszú leírás ami arról szól, hogy milyen fasza ez a rendezvény',
    },
    {
        name: 'Event Name',
        place: 'hely',
        date: new Date(),
        description: 'ez egy hosszú leírás ami arról szól, hogy milyen fasza ez a rendezvény',
    },
    {
        name: 'Event Name',
        place: 'hely',
        date: new Date(),
        description: 'ez egy hosszú leírás ami arról szól, hogy milyen fasza ez a rendezvény',
    },
    {
        name: 'Event Name',
        place: 'hely',
        date: new Date(),
        description: 'ez egy hosszú leírás ami arról szól, hogy milyen fasza ez a rendezvény',
    },
    {
        name: 'Event Name',
        place: 'hely',
        date: new Date(),
        description: 'ez egy hosszú leírás ami arról szól, hogy milyen fasza ez a rendezvény',
    },
    {
        name: 'Event Name',
        place: 'hely',
        date: new Date(),
        description: 'ez egy hosszú leírás ami arról szól, hogy milyen fasza ez a rendezvény',
    },
    {
        name: 'Event Name',
        place: 'hely',
        date: new Date(),
        description: 'ez egy hosszú leírás ami arról szól, hogy milyen fasza ez a rendezvény',
    },
];

export const EventsPage = () => {
    return (
        <PagePaper title="Események">
            {MOCK_EVENTS.map((e) => {
                return (
                    <Grid item md={6}>
                        <MediaCard
                            date={e.date}
                            description={e.description}
                            place={e.place}
                            name={e.name}
                        ></MediaCard>
                    </Grid>
                );
            })}
        </PagePaper>
    );
};

export default EventsPage;
