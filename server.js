const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve assets from the assets folder
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Route for the main portfolio page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio.html'));
});

// Catch-all route to serve portfolio.html for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Portfolio server is running on port ${PORT}`);
    console.log(`📱 Local: http://localhost:${PORT}`);
    console.log(`🌐 Production: Your Render URL will be here`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('👋 Server shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('👋 Server shutting down gracefully...');
    process.exit(0);
});
