import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import Home from './client/components/Home'

const app = express();
app.use(express.static('public'))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))

app.get('/', (req, res) => {
    const content = renderToString(<Home />)

    const html = `
        <html>
            <head>
                <body>
                    <div id='root'>${content}</div>
                    <script src='bundle.js'></script>
                </body>
            </head>
        </html>
    `

    res.send(html)
})

