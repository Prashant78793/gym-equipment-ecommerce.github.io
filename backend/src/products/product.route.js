const express = require('express');
 const Product = require('./product.model');
 const { postAProduct, getAllProducts, getSingleProduct, UpdateProduct, deleteAProduct } = require('./product.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router =  express.Router();

router.post("/create-product",verifyAdminToken, postAProduct)

router.get("/", getAllProducts);


 router.get("/:id", getSingleProduct);

 router.put("/edit/:id",verifyAdminToken, UpdateProduct);

router.delete("/:id",verifyAdminToken, deleteAProduct)


module.exports = router;
