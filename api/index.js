const express = require('express');
const app = express();
const config = require('./config/default.json');
const router = require('./rotas/fornecedores');

app.use(express.json())
app.use('/api/fornecedores', router)

app.listen(config.get('api.porta'), () => {
    console.log('ta bombando');
});