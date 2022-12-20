const express = require('express');
const mongoose = require('mongoose');
const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json({extended: true}))
app.use(require('./routes/transaction.route'))
app.use(require('./routes/getTransaction.route'))
async function start () {
    try {
        await mongoose.connect('mongodb+srv://vercel-admin-user:ds3rRt5ZmBt5BnzC@clusterdefi.h9rojy8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Server started on port : ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()

module.exports = app
//mongodb+srv://Valentyn:Valentyn@clusterdefi.h9rojy8.mongodb.net/Transaction?retryWrites=true&w=majority
//mongodb+srv://vercel-admin-user:ds3rRt5ZmBt5BnzC@clusterdefi.h9rojy8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority