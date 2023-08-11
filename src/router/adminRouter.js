
const express = require('express');
const productsModel = require('../models/products.model.js');
const adminRouter = express.Router();


adminRouter.get('/', async (req, res) => {
  //res.render('admin');
  try {
    const {page}=req.query;
    const data = await productsModel.paginate({},{limit:5,page:page || 1});
    const {docs,...rest} =data
/*      console.log(queryResult); */
    let products =docs.map((doc)=>{
        return {
            title: doc.title,
            description:doc.description,
            price:doc.price,
            thumbnail:doc.thumbnail,
            marca:doc.marca,
            code:doc.code,
            stock:doc.stock,
            }
    })
   
  return  res.status(200).render("admin",{products, pagination: rest});

} catch (err) {
    if (err instanceof Error) {
        res.status(400).json({ status: "error", msg: "Invalid input", data: {} })
    } else {
        res.status(500).json({ status: "error", msg: "Error in server", data: {}})
    }
}
});


module.exports = adminRouter;