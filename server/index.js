import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use("/user", userRoutes);

app.get("/", (req, res) => res.send("Hello, this auth template"));
const PORT = process.env.PORT || 5001;
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server is running at port http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
