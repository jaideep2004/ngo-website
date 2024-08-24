const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
app.use(express.json());
app.use(cors());

// Function to generate hash
const generateHash = (data) => {
    const { key, txnid, amount, productinfo, firstname, email, salt } = data;

    // Prepare the string for hashing according to PayU’s formula
    const hashString = [
        key,
        txnid,
        amount,
        productinfo,
        firstname,
        email,
        '', '', '', '', '', '', '', '', '', salt
    ].join('|');

    // Generate SHA-512 hash
    const hash = crypto.createHash('sha512').update(hashString).digest('hex');
    return hash;
};

// Route to generate hash
app.post('/generate-hash', (req, res) => {
    const formData = req.body;

    // Check if all required fields are provided
    if (!formData.key || !formData.txnid || !formData.amount || !formData.productinfo || !formData.firstname || !formData.email || !formData.salt) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const hash = generateHash({
            key: formData.key,
            txnid: formData.txnid,
            amount: formData.amount,
            productinfo: formData.productinfo,
            firstname: formData.firstname,
            email: formData.email,
            salt: formData.salt
        });
        res.json({ hash });
    } catch (error) {
        res.status(500).json({ error: 'Error generating hash' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
