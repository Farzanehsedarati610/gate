document.getElementById('transferForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const sender = document.getElementById('sender').value; // String for sender
    const receiver = document.getElementById('receiver').value; // String for receiver
    const amount = parseFloat(document.getElementById('amount').value); // Convert input to a number

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('response').innerText = 'Please enter a valid amount.';
        return;
    }

    try {
        const response = await fetch('https://yourbankendpoint:yourport/transfer', { // Change the URL and port as needed
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sender, receiver, amount }) // Sending strings and amount
        });

        const result = await response.json();
        document.getElementById('response').innerText = `Transfer status: ${result.status}`;
    } catch (error) {
        document.getElementById('response').innerText = 'Error processing transfer: ' + error.message;
    }
});

