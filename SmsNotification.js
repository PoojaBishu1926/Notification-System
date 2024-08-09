const twilio = require('twilio');

const accountSid = 'your_account_sid'; // Replace with your Account SID
const authToken = 'your_auth_token';   // Replace with your Auth Token

// Create a Twilio client
const client = new twilio(accountSid, authToken);

// Define the SMS parameters
const messageOptions = {
    body: 'Hello from Node.js!',
    from: '+1234567890', // Replace with your Twilio phone number
    to: '+0987654321'    // Replace with the recipient's phone number
};

// Send the SMS
client.messages.create(messageOptions)
    .then(message => console.log(`Message sent with SID: ${message.sid}`))
    .catch(error => console.error('Error sending SMS:', error));
