// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 80; // HTTP port

app.use(bodyParser.json());

// Basic route for handling transfers
app.post('/transfer', (req, res) => {
    const { senderAccount, receiverAccount, amount } = req.body;

    // Logic for handling the transfer (placeholder)
    if (!senderAccount || !receiverAccount || !amount) {
        return res.status(400).json({ message: 'Invalid input' });
    }

    // Simulate a transfer process
    console.log(`Transferring ${amount} from ${senderAccount} to ${receiverAccount}`);
    res.status(200).json({ message: 'Transfer successful' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

