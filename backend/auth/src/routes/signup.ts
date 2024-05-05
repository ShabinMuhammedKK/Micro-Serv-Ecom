import express from "express";
import { Response, Request } from "express";
import { body, validationResult } from "express-validator";
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

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const existingUser = await User.findOne({email});
      if(existingUser){
        return res.status(409).send("email already exits");
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password,saltRounds);

      const user = User.build({email,password:hashedPassword})
      await user.save()

      req.session.user = {
        id: user._id,
        email: user.email
    } as MySessionData['user'];

      res.status(201).send(user)

    } catch (error) {
      return res.status(400).send(error)
    }
  }
);

export { router as userSignup };
