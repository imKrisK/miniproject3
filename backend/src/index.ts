import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose"; // Added import for mongoose
import myUserRoutes from "./routes/myUserRoute"; // Importing the user routes
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/users", myUserRoutes);//send request to myUserRoute file

app.listen(7000, () => {
    console.log('Server is running on localhost:7000');
}
);