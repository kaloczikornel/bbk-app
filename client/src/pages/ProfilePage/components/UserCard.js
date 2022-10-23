import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Avatar, Divider, IconButton, Stack, Typography } from '@mui/material';
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
                    <Typography variant="body2" color="text.secondary">
                        {idCardNumber}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {livingType}
                    </Typography>
                </Stack>
                <IconButton sx={{ alignSelf: 'flex-start' }} onClick={() => openModal()}>
                    <Edit sx={{ fontSize: 14 }} />
                </IconButton>
            </Box>
            <Divider />
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
            />
        </Card>
    );
};

export default UserCard;
