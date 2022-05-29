const multer = require('multer')

const upload = multer({
    limits:1000000,
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/i)){
            return cb(new Error('Please attach an image!'))
        }
        cb(undefined,true)
    }
})

module.exports=upload