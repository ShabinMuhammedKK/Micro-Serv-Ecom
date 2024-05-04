import express from "express";
import { userLogin, userLogout, currentUser, userSignup } from "./routes";
import mongoose from 'mongoose';

const start = async () => {
  try {
    // Initialize Express app
    const app = express();

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Mount routes
    app.use(userLogin);
    app.use(userLogout);
    app.use(currentUser);
    app.use(userSignup);


    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to MongoDB !!!");


    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port} !!!`);
    });

    return app;
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit with failure status
  }
};

export default start;
