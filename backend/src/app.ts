import express from "express";
import userRoutes from "./routes/user.routes";
import authRouter from "./routes/auth.routes";

//
//app.use("/api/auth", authRouter);

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Fintech API Running......");
});
app.use("/api",userRoutes)
app.use("/api/auth", authRouter)

export default app;