// Failure.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Failure = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const message = query.get('message') || 'Payment failed. Please try again.';

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Payment Failed!</h1>
            <p>{message}</p>
            <a href="/">Return to Home</a>
        </div>
    );
};

export default Failure;
