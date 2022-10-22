import React from 'react';
import Carousel from 'nuka-carousel';

export const HomePage = () => {
    return (
        <>
            <Carousel animation="zoom" sx={{ marginTop: 10 }}>
                <div style={{ background: 'red', width: 1152, height: 500 }}></div>
                <div style={{ background: 'blue', width: '100%', height: '100%' }}></div>
                <div style={{ background: 'green', width: '100%', height: '100%' }}></div>
                <div style={{ background: 'yellow', width: '100%', height: '100%' }}></div>
                <div style={{ background: 'purple', width: '100%', height: '100%' }}></div>
            </Carousel>
        </>
    );
};

export default HomePage;
