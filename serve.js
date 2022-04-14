const express = require('express')
const app = express()
const porta = process.env.PORT || 8083

app.use(express.static(__dirname + '/dist/'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})

app.listen(porta , function(){
    console.log('Servidor web rodando com Express')
}) 