const mongoose = require('mongoose')
const express = require("express")
const router = express.Router()


const supplierSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})



const Supplier = new mongoose.model("Supplier", supplierSchema)



router.post("/login", async (req, res) => {
    const {
        email,
        password
    } = req.body
    Supplier.findOne({
        email: email
    }, (err, user) => {
        if (user) {
            //  const isvalid= bcrypt.compare(password,user.password)
            if (user.password === password) {
                res.send({
                    message: "Login Successfull",
                    user: user
                })
            } else {
                res.send({
                    message: "Password didn't match"
                })
            }
        } else {
            res.send({
                message: "User not registered"
            })
        }
    })
})



router.post("/register", async (req, res) => {
    const {
        userName,
        email,
        password
    } = req.body

    // const hashpass = await bcrypt.hash(password, 10)
    //console.log(password,hashpass)
    Supplier.findOne({
        email: email
    }, (err, user) => {
        if (user) {
            res.send({
                message: "User already registerd"
            })
        } else {
            const user = new Supplier({
                userName,
                email,
                password: hashpass
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({
                        message: "Successfully Registered, Please login now."
                    })
                }
            })
        }
    })

})



module.exports = router;