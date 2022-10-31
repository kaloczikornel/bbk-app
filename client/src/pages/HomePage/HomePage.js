import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';

// TODO sum up page, what we are, what do we do, maybe who we are...
export const HomePage = () => {
    const { isAdmin } = useAuth();
    return (
        <Container maxWidth="1080px">
            <Typography variant="h2" textAlign="center" marginBottom={16}>
                Üdvözlünk a Bor Baráti Kör weboldalán!
            </Typography>
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={4}
            >
                <Grid item xs={12} md={6} order={{ md: 1 }}>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec dolor
                        efficitur, elementum urna ac, cursus libero. Pellentesque at ante quis
                        libero interdum laoreet. Cras malesuada diam nec ornare vestibulum. In
                        gravida tortor vitae ultricies fermentum. .
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} order={{ md: 2 }} justifyContent="center" display="flex">
                    <img src="wine_1.jpeg" alt="wine_1" width="50%" />
                </Grid>
                <Grid item xs={12} md={6} order={{ md: 4 }}>
                    <Typography variant="body1">
                        Quisque scelerisque odio mauris, ac auctor massa varius eu. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                        himenaeos. Donec egestas sagittis tortor eget interdum. Suspendisse non
                        tristique sapien. Pellentesque habitant morbi tristique senectus et netus et
                        malesuada fames ac turpis egestas.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} order={{ md: 3 }}>
                    <img src="wine_2.jpeg" alt="wine_2" width="50%" />
                </Grid>
                <Grid item xs={12} md={6} order={{ md: 5 }}>
                    <Typography variant="body1">
                        Curabitur eget quam sed est interdum vestibulum in non nisi. Nam suscipit,
                        urna ut accumsan venenatis, nisi neque sodales libero, non faucibus neque
                        massa venenatis arcu. Proin vehicula lorem eget nunc sagittis, et mollis
                        neque elementum. Donec ullamcorper est risus, nec volutpat nulla vestibulum
                        et. Nam porta porttitor eros, et tempor ante varius vitae. Donec ultrices eu
                        velit eget tristique. Nam mattis rhoncus mauris in semper. Suspendisse
                        euismod ante purus, nec dictum ex mattis eget. Sed molestie nisi quis mauris
                        pharetra iaculis.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} order={{ md: 6 }} justifyContent="center" display="flex">
                    <img src="wine_3.png" alt="wine_3" width="50%" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;
