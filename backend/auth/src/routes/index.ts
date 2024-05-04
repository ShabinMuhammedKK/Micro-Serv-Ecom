import { currentUser } from "./currentuser";
import { userLogin } from "./login";
import { userLogout } from "./logout";
import { userSignup } from "./signup";


import express from "express";

const router = express.Router();

export { currentUser, userLogin, userLogout, userSignup };
