import React from 'react';
import Carousel from 'nuka-carousel';

// TODO sum up page, what we are, what do we do, maybe who we are...
export const HomePage = () => {
    return (
        <Carousel animation="zoom" sx={{ marginTop: 10 }}>
            <div style={{ background: 'red', width: 1152, height: 500 }} />
            <div style={{ background: 'blue', width: '100%', height: '100%' }} />
            <div style={{ background: 'green', width: '100%', height: '100%' }} />
            <div style={{ background: 'yellow', width: '100%', height: '100%' }} />
            <div style={{ background: 'purple', width: '100%', height: '100%' }} />
        </Carousel>
    );
};

export default HomePage;
