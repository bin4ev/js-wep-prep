const express = require('express')
const app = express()
const {PORT} = require('./config/config')
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler');


require('./config/express')(app)
require('./config/mongoose')(app)

app.use(router)
app.use(errorHandler)


app.listen(PORT,console.log(`Server listening on port: ${PORT}.....`))