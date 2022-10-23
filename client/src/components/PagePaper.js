import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

export default function PagePaper({
    marginTop = 12,
    paddingBottom = 0,
    marginBottom = 0,
    children,
    title,
}) {
    return (
        <Paper
            sx={{ margin: 1, marginTop, paddingBottom, marginBottom, padding: 8 }}
            elevation={12}
        >
            <Typography variant="h4">{title}</Typography>
            <Grid
                container
                spacing={3}
                sx={{ margin: 0, width: '100%' }}
                justifyContent="space-around"
                alignItems="center"
            >
                {children}
            </Grid>
        </Paper>
    );
}
