import express, { response } from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({message: "hello word"});
})

app.listen(3333)

