// index.js
import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

app.get('/get', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).send('Missing URL parameter');

    try {
        const response = await axios.get(url, {
            headers: {
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'accept-language': 'en-US,en;q=0.9',
                'cookie': 'cf_clearance=Y6TgH2BsmmbxtbnicvsMj5xHPtzVdPKMY5f5NiyTaWs-1758193037-1.2.1.1-O7I8NQmYAQFlG2Vm5V29hOYJFnqiM5zruBd.Rip0.nvTrQzc7UjXauycrIJKfxOSy2kS0P8YWgIXjWW2Wv5h5EsZweKBVqtZasnbjCa6UQcJpCNVUz54alQgFZl7wEKt.LAJb6sRg1AkZpnSoszai9SrHCYLNCQ1_Id2OV7Ixo.GRZYbnuMJZGvUoHyABM5QzKkK0sEDYbdEGJygQ19.hytbuZ.56wHK7.8isDI8WD4',
                'dnt': '1',
                'referer': 'https://watch.livecricketsl.xyz/dont_share.php',
                'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Microsoft Edge";v="140"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'same-origin',
                'sec-fetch-user': '?1',
                'upgrade-insecure-requests': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0'
            }
        });

        res.setHeader('Content-Type', 'text/html');
        res.send(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error fetching URL');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
