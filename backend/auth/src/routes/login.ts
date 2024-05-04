import express from "express";

const router = express.Router();

router.post("/api/users/login", (req, res) => {
  
  const {email,password} = req.body;
  if(email && password){
    res.status(200).send("hello")
  }
});

export { router as userLogin };