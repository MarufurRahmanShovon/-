const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")


// const authRouter = require('./routes/adminAuth')

// const supplierRouter = require('./routes/supplierAuth')



const app = express()
app.use(express.json())
// app.use(express.urlencoded())
app.use(cors())



mongoose.connect("mongodb+srv://marufurr701:Ekaras123@shovon.zyzgq.mongodb.net/e-commerce?retryWrites=true&w=majority", () => console.log("DB connected"))

// app.use('/admin', authRouter)

// app.use('/supplier', supplierRouter)


app.listen(7002, () => {
    console.log("listening port 7002")
})