const express = require('express');
 const Product = require('./product.model');
 const { postAProduct, getAllProducts, getSingleProduct, UpdateProduct, deleteAProduct } = require('./product.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
 //const verifyAdminToken = require('../middleware/verifyAdminToken');
const router =  express.Router();

// frontend => backend server => controller => book schema  => database => send to server => back to the frontend
//post = when submit something fronted to db
// get =  when get something back from db
// put/patch = when edit or update something
// delete = when delete something

// post a book
router.post("/create-product",verifyAdminToken, postAProduct)

// get all books
router.get("/", getAllProducts);


 router.get("/:id", getSingleProduct);

// // update a book endpoint
 router.put("/edit/:id",verifyAdminToken, UpdateProduct);

router.delete("/:id",verifyAdminToken, deleteAProduct)


module.exports = router;
