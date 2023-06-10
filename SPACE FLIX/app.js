const express = require('express')
const app = express()
const ejs = require('ejs')
const port = 3000

app.set('view engine', 'ejs')

//arquivos eststicos
app.use(express.static('public'))
// rota de texte
app.get('/', (req, res)=> {
    res.render("index")
})

//configurando o servidor
app.listen(port, ()=> {
    console.log('SERVIDO ONLINE')
})