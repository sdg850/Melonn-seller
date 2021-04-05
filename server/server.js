const cors = require('cors')
const express = require('express')
const app = express()
const path = require('path')




app.set('port', process.env.PORT || 4000)

app.use(cors())
app.use(express.static(path.join((path.parse(__dirname).dir, 'public'))))
app.use(express.json())

const Router = require('./routes/routes')
app.use('/homepage',Router )



app.listen(app.get('port'), () => { console.log(`Server on port ${app.get('port')}`)} )