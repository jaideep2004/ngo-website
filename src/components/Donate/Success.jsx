// Success.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const message = query.get('message') || 'Payment was successful!';

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Payment Successful!</h1>
            <p>{message}</p>
            <a href="/">Return to Home</a>
        </div>
    );
};

export default Success;
