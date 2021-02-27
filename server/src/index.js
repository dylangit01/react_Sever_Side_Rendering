import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import Home from './client/components/Home'

const app = express();

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))

app.get('/', (req, res) => {
    const content = renderToString(<Home />)
    res.send(content)
})

