const express=require('express')
const router=express.Router()
const getProducts=require("../controler/productController")

router.get("/",getProducts)

module.exports=router