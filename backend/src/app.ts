import express from "express";
import userRouter from "./routes/user.routes";
import authRouter from "./routes/auth.routes";
import cors from "cors";
import aiRouter from "./routes/ai.route";

const app = express();

// ✅ Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL (Next.js default)
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // if you want to send cookies
  }),
);





app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Fintech API Running......");
});

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/ai", aiRouter)

export default app;