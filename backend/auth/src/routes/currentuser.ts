import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.send("current user details !!!");
  //controller will be here
});

export { router as currentUser };
