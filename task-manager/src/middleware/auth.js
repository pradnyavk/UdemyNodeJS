const jwt = require('jsonwebtoken')
const user = require('../models/user')

const auth = async(req,res,next)=>{
    try {
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token,'thisismynewcourse')
        console.log(token)
    } catch (e) {
        res.status(401).send({error:'Please Authenticate!'})
    }
}

module.exports=auth