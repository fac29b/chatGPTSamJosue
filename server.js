const express = require("express");
const fetch = require('node-fetch');
const server = express();

// Middleware to parse JSON body
server.use(express.json());


// API route
server.get("/api/gpt", async (request, response) => {
    try {
        // Example of an API call using fetch
        const apiResponse = await fetch('OPEN_API_KEY', {
            method: 'GET',
            headers: {
                // Headers if needed
            },
        });
        const apiJson = await apiResponse.json();

        response.json(apiJson);
    } catch (error) {
        console.error('Error:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
