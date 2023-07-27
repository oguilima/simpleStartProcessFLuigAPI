const express = require('express');
const app = express();


const processRoutes = require("./routes/processInitRoutes")

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/', processRoutes)

app.listen(3000, function() {
    console.log('Servidor ouvindo na porta 3000');
});
