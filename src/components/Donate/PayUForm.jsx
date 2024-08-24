import React, { useEffect } from 'react';

const PayUForm = () => {
  useEffect(() => {
    // Load PayU script dynamically
    const script = document.createElement('script');
    script.src = 'https://test.payu.in/_payment';
    script.async = true;
    script.onload = () => {
      console.log('PayU script loaded successfully');
    };
    script.onerror = () => {
      console.error('Error loading PayU script');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    const payuParams = {
      key: 'jock7B', // Replace with your actual test key
      txnid: 'uniqueTxnId', // Generate unique ID for each transaction
      amount: '10',
      productinfo: 'Donation',
      firstname: 'John',
      email: 'john.doe@example.com',
      phone: '',
      surl: 'http://localhost:5173/success',
      furl: 'http://localhost:5173/failure',
      hash: '' // Obtain this from your backend
    };

    if (window.PayU) {
      window.PayU.startPayment(payuParams);
    } else {
      console.error('PayU script not loaded');
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Donate</button>
    </div>
  );
};

export default PayUForm;
