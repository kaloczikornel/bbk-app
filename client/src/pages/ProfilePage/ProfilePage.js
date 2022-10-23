/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Grid, Stack } from '@mui/material';
import PagePaper from '../../components/PagePaper';
import MediaCard from './components/MediaCard';
import UserCard from './components/UserCard';
import { useAuth0 } from '@auth0/auth0-react';
import UserEditModal from './components/UserEditModal';
// import { AXIOS_METHOD, useApi } from "../../hooks/useApi";

export const ProfilePage = () => {
    // const [data, loading, error] = useApi(AXIOS_METHOD.GET, '')
    const [userData, setUserData] = useState({
        email: 'email@cim.hu',
        name: 'Nagy János',
        livingType: 'Kolis',
        idCardNumber: '12312AS',
        profilePic: '',
    });
    const [events, setEvents] = useState([
        {
            date: new Date(),
            place: 'FNT',
            name: 'Borkóstoló Brigád',
        },
        {
            date: new Date(),
            place: 'FNT',
            name: 'Borkóstoló Valaki',
        },
    ]);
    const [openModal, setOpenModal] = useState(false);
    const { user } = useAuth0();

    useEffect(() => {
        if (user) {
            setUserData((prevState) => ({
                ...prevState,
                email: user.email,
                name: user.name,
                profilePic: user.picture,
            }));
        }
    }, [user, setUserData]);
    return (
        <PagePaper title="Profilom">
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={12} md={6}>
                    <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={4}
                        sx={{ p: 2 }}
                    >
                        {events.length !== 0 &&
                            events.map((e) => {
                                return <MediaCard date={e.date} place={e.place} name={e.name} />;
                            })}
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <UserCard
                        name={userData.name}
                        emial={userData.email}
                        livingType={userData.livingType}
                        idCardNumber={userData.idCardNumber}
                        profilePic={userData.profilePic}
                        openModal={() => setOpenModal(true)}
                    />
                </Grid>
            </Grid>
            <UserEditModal
                open={openModal}
                handleClose={() => setOpenModal(false)}
                user={userData}
                handleSave={() => setOpenModal(false)}
            />
        </PagePaper>
    );
};

export default ProfilePage;
