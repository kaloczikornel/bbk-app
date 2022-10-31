/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid, Stack, Typography } from '@mui/material';
import PagePaper from '../../components/PagePaper';
import MediaCard from './components/MediaCard';
import UserCard from './components/UserCard';
import { useAuth0 } from '@auth0/auth0-react';
import UserEditModal from './components/UserEditModal';
import { AXIOS_METHOD, useApi } from '../../hooks/useApi';

export const ProfilePage = () => {
    const { user } = useAuth0();
    const [dbUser, setDbUser] = useState(null);
    const [events, setEvents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [data, loading, error, apiCallback] = useApi(AXIOS_METHOD.GET, `/user/${user.sub}`);
    const [eventData, eventLoading, eventError, eventApiCallback] = useApi(
        AXIOS_METHOD.GET,
        `/applies/${user.sub}`
    );

    useEffect(() => {
        setEvents(eventData.events);
    }, [eventData]);

    useEffect(() => {
        setDbUser(data.user);
    }, [data]);

    useEffect(() => {
        if (!openModal) {
            apiCallback();
        }
    }, [openModal]);

    return (
        <PagePaper title="Profilom">
            {loading && <CircularProgress />}
            {dbUser && !loading && !error && (
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Stack
                            direction="column"
                            alignItems="center"
                            justifyContent="space-between"
                            spacing={4}
                            sx={{ p: 2 }}
                        >
                            {eventLoading && <CircularProgress />}
                            {!eventLoading && events && events.length !== 0 ? (
                                events.map((e) => {
                                    return (
                                        <MediaCard
                                            event={e}
                                            apiCallback={() => eventApiCallback()}
                                        />
                                    );
                                })
                            ) : (
                                <Typography variant="body2">
                                    Még nem jelentkeztél egy eseményre sem!
                                </Typography>
                            )}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <UserCard
                            dbUser={dbUser}
                            profilePic={user.profile_pic}
                            openModal={() => setOpenModal(true)}
                        />
                    </Grid>
                </Grid>
            )}
            {dbUser && (
                <UserEditModal
                    open={openModal}
                    handleClose={() => setOpenModal(false)}
                    user={dbUser}
                />
            )}
        </PagePaper>
    );
};

export default ProfilePage;
