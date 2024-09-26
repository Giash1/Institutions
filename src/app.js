const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Log incoming requests for debugging
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
