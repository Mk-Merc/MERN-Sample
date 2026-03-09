require('dotenv').config();

const express = require('express');

const notesRoutes = require('./routes/notes');

// Create an instance of the Express application
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Remove Basic Route to Test the Server

// Use the notes routes
app.use('/api/notes', notesRoutes);

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
}); 