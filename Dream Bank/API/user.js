const router = require('express').Router();
const UserModel = require('../models/userModel')

router.post('/register', async (req, res)=>{
    
    try {     
        const newUser = new UserModel({
        username: req.body.username,
        bankAccount: req.body.bankAccount,
        password: req.body.password,
        balance: req.body.balance
})
        const savedUser = await newUser.save()
        res.status(201).json({savedUser})

} catch (error) {
        res.status(500).json(error)
        console.log(error)
}
});


//LOGIN
router.post("/login", async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    UserModel.findOne({ username: username },( err , foundResults)=>{
        if(err){
            console.log(err);
        }else{
            if(foundResults.password===password){
                res.send("You logged in!!")
            }else{
                res.send("Incorrect username or password")
            }
        }
    })
              });
              


router.get("/login/userInfo", async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    UserModel.findOne({ username: username },( err , foundResults)=>{
        if(err){
            console.log(err);
        }else{
            if(foundResults.password===password){
                res.status(200).json(foundResults)
            }else{
                res.send("Incorrect username or password")
            }
        }
    })
              })

              router.put("/login/updateuserInfo", async(req,res)=>{

                console.log(req.body)
                const username = req.body.username;
                const password = req.body.password;
                const balance = req.body.balance;
                UserModel.findOne({ username: username },( err , foundResults)=>{
                    if(err){
                        console.log(err);
                    }else{
                        if(foundResults.password===password){
                            foundResults.balance = foundResults.balance - balance ;
                            res.status(200).json(foundResults)
                            foundResults.save();
                        }else{
                            res.send("Incorrect username or password")
                        }
                    }
                })
                          });


module.exports = router;