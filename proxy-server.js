const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// enable CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());

app.get('/proxy', async (req, res) => {
    try {
        const { url, ...params } = req.query;
        const response = await axios.get(url, { params });

        res.json(response.data);
    } catch (error) {
        console.error('Error in proxy request:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});