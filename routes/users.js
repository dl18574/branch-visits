const axios = require('axios');
const express = require('express');
const router = express.Router();
const USER_ENDPOINT = process.env.USER_ENDPOINT || 'localhost:8080';
/* GET users. */
router.get('/', async function (req, res, next) {
    try {
        const result = await axios.get(`http://${USER_ENDPOINT}/users`);
        res.json(result.data);
    } catch (e) {
        console.log(e)
        throw e
    }
});

module.exports = router;