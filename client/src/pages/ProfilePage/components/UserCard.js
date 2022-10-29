import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Avatar, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';

export const UserCard = ({ name, email, idCardNumber, livingType, profilePic, openModal }) => {
    return (
        <Card>
            <Box sx={{ p: 2, display: 'flex' }}>
                <Avatar variant="rounded" src={profilePic} />
                <Stack spacing={0.5} sx={{ marginX: '16px', flexGrow: 1 }}>
                    <Typography fontWeight={700}>{name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {email}
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
            >
                <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                        Személyi ig. szám
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" textAlign="end">
                        {idCardNumber}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                        Kolis vagy?
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" textAlign="end">
                        {livingType}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
};

export default UserCard;
