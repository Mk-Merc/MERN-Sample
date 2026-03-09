require('dotenv').config();

const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
}); 