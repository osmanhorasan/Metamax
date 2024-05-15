const express = require('express');
const axios = require('axios');
const cors = require('cors');
const proxy = require('express-http-proxy');


const app = express();
const PORT = process.env.PORT || 5000;

const apiURL = 'https://api.metamax.com.tr'
// Endpoint to forward requests to the external API for contract/available

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(express.json())

app.use(async (req, res, next) => {
    try {
        const url = `${apiURL}${req.originalUrl}`
        const axiosInstance = {
            url,
            method: req.method,
            data: undefined,
            headers: {
                "Content-Type": "application/json"
            }
        }
        if (req.method == 'POST') {
            axiosInstance.data = JSON.stringify(req.body)
        }
        const response = await axios(axiosInstance);
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status || 500).json({ error: error.message });
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



