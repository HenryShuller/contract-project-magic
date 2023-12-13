require('@babel/register')
require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig')
const indexRouter = require('./routes/index.router')
const checkUser = require('./middlewares/verifyJWT')

const app = express()
serverConfig(app)


app.use(checkUser)

	

app.use('/',indexRouter)


app.listen(3000,()=>console.log('Сервер запущен'))