const express = require('express')
const mongoose = require('mongoose')

const Animal = mongoose.model('Animal', new mongoose.Schema({
    tipo: String,
    estado: String,
}))

const app = express()

mongoose.connect('mongodb://user:password@monguito:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
    console.log('list...')
    const animales = await Animal.find();
    return res.send(animales)
})
app.get('/crear', async (_req, res) => {
    console.log('add...')
    await Animal.create({ tipo: 'Chanchito', estado: 'Feliz' })
    return res.send('recurso ceado com exito')
})
app.get('/delete', async (_req, res) => {
    console.log('delete...')
    await Animal.deleteOne()
    return res.send('ultimo recurso deletado')
})



app.listen(3000, () => console.log('ouvindo en la porta 3000...'))