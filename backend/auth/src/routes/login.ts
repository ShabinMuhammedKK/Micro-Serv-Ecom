import express,{Response,Request} from "express";
import {body, validationResult } from "express-validator";
import { User } from "../models/user";
import bcrypt from "bcrypt"

const router = express.Router();


interface SessionData {
  id:string;
  email:string;
  
}
interface MySessionData extends SessionData {
  user?: {
      id: string;
      email: string;
  }
}

declare module "express-session" {
  interface SessionData {
      user?: {
          id: string;
          email: string;
      }
  }
}

router.post("/api/users/login",[

  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 6 }),

] ,
async (req:Request, res:Response) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email,password} = req.body;
  
  try {
    const existingUser = await User.findOne({email});
    if(!existingUser){
      return res.status(400).send("please signup")
    }

    const hashedPassword = existingUser.password
    const match = bcrypt.compare(password,hashedPassword);

    if(!match){
      return res.status(400).send("password not match")
    }else{

      req.session.user = {
        id: existingUser._id,
        email: existingUser.email
    } as MySessionData['user'];

    

      res.status(200).send("logined successfully")
    }




  } catch (error) {
    return res.status(400).send("something went wrong in login")
  }
});

export { router as userLogin };