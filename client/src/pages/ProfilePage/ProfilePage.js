/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid, Stack, Typography } from '@mui/material';
import PagePaper from '../../components/PagePaper';
import MediaCard from './components/MediaCard';
import UserCard from './components/UserCard';
import UserEditModal from './components/UserEditModal';
import { AXIOS_METHOD, useApi } from '../../hooks/useApi';
import { useAuth } from '../../hooks/useAuth';
import { useAuth0 } from '@auth0/auth0-react';

export const ProfilePage = () => {
    const { dbUser } = useAuth();
    const { user } = useAuth0();
    const [events, setEvents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [eventData, eventLoading, eventError, eventApiCallback] = useApi(
        AXIOS_METHOD.GET,
        `/applies/${dbUser?._id}`
    );

    useEffect(() => {
        setEvents(eventData.events);
    }, [eventData]);

    useEffect(() => {
        if (!openModal && typeof apiCallback !== 'undefined') {
            apiCallback();
        }
    }, [openModal]);

    return (
        <PagePaper title="Profilom">
            {eventLoading && <CircularProgress />}
            {dbUser && !eventLoading && !eventError && (
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
