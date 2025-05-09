import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import PostRoutes from "./routes/posts.js";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", PostRoutes);

app.listen(8800, () => {
  console.log("Connected to DB");
});
