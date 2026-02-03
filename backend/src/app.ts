import express from "express";
import userRouter from "./routes/user.routes";

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Fintech API Running......");
});
app.use("/api",userRouter)

export default app;