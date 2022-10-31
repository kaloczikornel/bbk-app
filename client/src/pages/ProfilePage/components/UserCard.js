import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Avatar, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';

export const UserCard = ({ dbUser, profilePic, openModal }) => {
    return (
        <Card>
            <Box sx={{ p: 2, display: 'flex' }}>
                <Avatar variant="rounded" src={profilePic} />
                <Stack spacing={0.5} sx={{ marginX: '16px', flexGrow: 1 }}>
                    <Typography fontWeight={700}>{dbUser.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {dbUser.email}
                    </Typography>
                </Stack>
                <IconButton sx={{ alignSelf: 'flex-start' }} onClick={() => openModal()}>
                    <Edit sx={{ fontSize: 26 }} />
                </IconButton>
            </Box>
            <Divider />
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ px: 2, py: 1 }}
                spacing={2}
            >
                <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                        Személyi ig. szám
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" textAlign="end">
                        {dbUser.idCardNumber}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                        Be tudsz jutni a koliba?
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" textAlign="end">
                        {dbUser.canGetIn ? 'Igen' : 'Nem'}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                        Van kolis kártyád?
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" textAlign="end">
                        {dbUser.hasCard ? 'Van' : 'Nincs'}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
};

export default UserCard;
