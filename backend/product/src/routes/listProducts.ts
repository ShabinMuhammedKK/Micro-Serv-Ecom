import  express  from "express";

const router = express();

router.get("/api/products/listproducts",(req,res)=>{
    return res.status(200).send("product listing");
})


export {router as listProducts}