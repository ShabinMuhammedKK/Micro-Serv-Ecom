import express from "express";
import { Response, Request } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    if (email && password) {
      return res.status(200).send("success");
    } else {
      return res.status(401).send("Invalid credentials");
    }
  }
);

export { router as userSignup };
