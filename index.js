const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Define an API endpoint
app.get('/gets', async (req, res) => {
    // The target URL you want to scrape
    const url = 'https://watch.livecricketsl.xyz/live/dtv.php?id=ZU9nDDo/C1w=';

    // --- CRITICAL HEADERS ---
    // These headers make our script look like a real browser.
    // The cookie is especially important to bypass Cloudflare protection.
    const headers = {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'en-US,en;q=0.9',
        // This cookie is TEMPORARY and will expire. You will need to get a new one from your browser.
        'cookie': 'cf_clearance=Y6TgH2BsmmbxtbnicvsMj5xHPtzVdPKMY5f5NiyTaWs-1758193037-1.2.1.1-O7I8NQmYAQFlG2Vm5V29hOYJFnqiM5zruBd.Rip0.nvTrQzc7UjXauycrIJKfxOSy2kS0P8YWgIXjWW2Wv5h5EsZweKBVqtZasnbjCa6UQcJpCNVUz54alQgFZl7wEKt.LAJb6sRg1AkZpnSoszai9SrHCYLNCQ1_Id2OV7Ixo.GRZYbnuMJZGvUoHyABM5QzKkK0sEDYbdEGJygQ19.hytbuZ.56wHK7.8isDI8WD4',
        'priority': 'u=0, i',
        'referer': 'https://watch.livecricketsl.xyz/dont_share.php',
        'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Microsoft Edge";v="140"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0',
    };

    console.log("🚀 Fetching HTML from target URL...");

    try {
        // Use axios to make the GET request with the specified URL and headers
        const response = await axios.get(url, { headers });

        console.log("✅ Success! Sending HTML response back to the client.");
        
        // Set the Content-Type header to let the browser know it's receiving HTML
        res.setHeader('Content-Type', 'text/html');
        // Send the HTML content from the response
        res.send(response.data);

    } catch (error) {
        console.error("❌ Failed to retrieve the page.", error.message);
        // Send a 500 Internal Server Error status if something goes wrong
        res.status(500).send(`<h1>Error</h1><p>Failed to fetch the channel page. The server responded with: ${error.message}</p>`);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🟢 Server is running on http://localhost:${PORT}`);
    console.log(`🔗 Access the API at: http://localhost:${PORT}/get-channel-html`);
});
