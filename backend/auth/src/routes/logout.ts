import express from "express";

const router = express.Router();

router.get("/api/users/logout", (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("You are not logged in");
  }

  // Clear user session
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).send("Error logging out");
    }
    return res.status(200).send("Logout successful");
  });
});

export { router as userLogout};