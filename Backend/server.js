const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const API_KEY = process.env.INSTAMOJO_API_KEY;
const AUTH_TOKEN = process.env.INSTAMOJO_AUTH_TOKEN;

app.get('/', (req, res) => {
  res.send("NGO BACKEND!");
});

app.post('/create-payment-request', async (req, res) => {
  const { amount, buyer_name, email, phone } = req.body;

  const headers = {
    'X-Api-Key': API_KEY,
    'X-Auth-Token': AUTH_TOKEN,
    'Content-Type': 'application/json'
  };

  const payload = {
    purpose: 'Donation', // Example purpose, adjust as per your needs
    amount: amount,
    buyer_name: buyer_name,
    email: email,
    phone: phone,
    redirect_url: 'http://localhost:3000/payment-success', // Update with your actual redirect URL
    send_email: true,
    webhook: 'http://localhost:5000/webhook', // Update with your actual webhook URL
    send_sms: true,
    allow_repeated_payments: false
  };

  try {
    const response = await axios.post('https://test.instamojo.com/api/1.1/payment-requests/', payload, { headers });
    res.json(response.data);
  } catch (error) {
    console.error('Error creating payment request:', error.message);
    res.status(500).json({ error: 'Failed to create payment request' });
  }
});

app.post('/webhook', (req, res) => {
  // Handle webhook notifications here
  console.log('Webhook received:', req.body);
  res.status(200).send('OK');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
