const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/say', async(req, res) =>{
    const keyword = req.query.keyword;
    try{
        const response = await axios.get(`http://localhost:3001/greet?keyword=${keyword}`);
        const result = response.data;

        res.send(`<h1> ${result} </h1>`);
    }catch(error){
        console.error('Error: ', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
