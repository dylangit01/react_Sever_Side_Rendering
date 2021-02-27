import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()
app.use(express.static('public'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))

app.get('*', (req, res) => {
	const store = createStore()
	res.send(renderer(req, store))
})
