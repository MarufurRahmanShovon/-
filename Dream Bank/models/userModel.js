const mongoose = require('mongoose')

const bankUserSchema = new mongoose.Schema({
          username:{
                    type: String,
                    // required:[true,'must provide a Username'],
                    // unique:[true,'Username already exists']
          }, 
          bankAccount:{
                    type:String,
                    required:true
          },
          password:{
                    type:String,
                    required:true
          },
          balance:{
                    type:Number,
                    default:500,
          },
          
})

module.exports = mongoose.model('UserbankInfo', bankUserSchema)