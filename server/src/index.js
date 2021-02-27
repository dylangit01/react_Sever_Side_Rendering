import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server.js'
import Home from './client/components/Home.js'
const app = express();

app.use(express.json())
app.use(express.urlencoded())

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))

app.get('/', (req, res) => {
    const content = renderToString(<Home />)
    res.send(content)
})

