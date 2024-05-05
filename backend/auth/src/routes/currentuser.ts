import express from "express";
import { User } from "../models/user";

const router = express.Router();

router.get("/api/users/currentuser", async (req, res) => {
  if(!req.session.user){
    return res.status(400).send("please login");
  }

  try {
    const currentUser = await User.findOne({email:req.session.user.email});
    return res.status(200).send(currentUser)
  } catch (error) {
    return res.status(400).send(error)
  }
});

export { router as currentUser };
