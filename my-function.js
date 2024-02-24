const express = require('express');

const app = express();
const port = 3001;

function greetWithName(keyword){
    const greeting = `Sharanya Sadhu says ${keyword}`;
    return greeting;
}

app.get('/greet', (req, res) =>{
    const keyword = req.query.keyword;
    const result = greetWithName(keyword);
    res.send(result);
});

app.listen(port, () =>{
    console.log('Server is running at http://localhost:${port}');
});
