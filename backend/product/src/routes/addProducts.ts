import  express  from "express";

const router = express();

router.post("/api/products/addproduct",async (req,res)=>{
    
    try {

        const {name,description,price,category} = req.body;

        if(name && description && price && category){
            res.status(200).send(req.body)
        }
        
    } catch (error) {
        return res.status(500).send(error)
    }



})


export {router as addProduct}