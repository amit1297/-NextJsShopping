const mangoose = require('mangoose');
const ProductsSchema = mangoose.Schema({
id:{
    type: String,
    unique:true,
    required:true
},
title:{
    type: String,
    required:true
},
price:{
    type: Number
},
description:{
    type: String
},
category:{
    type: String
},
image:{
    type:String
}

})

module.models ={}
module.exports= mangoose.model('Products', ProductsSchema);