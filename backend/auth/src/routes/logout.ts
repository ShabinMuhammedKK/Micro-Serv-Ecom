import express from "express";

const router = express.Router();

router.get("/api/users/logout", (req, res) => {
  res.send("current user logout !!!");
  //controller will be here
});

export { router as userLogout};