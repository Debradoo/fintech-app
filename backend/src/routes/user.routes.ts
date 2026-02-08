import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { profile } from "../controllers/user.controller";
import prisma from "../config/prisma";

const userRouter = Router();

userRouter.get("/profile", authMiddleware, profile);



 userRouter.post("/sign-up",async(req,res)=>{
    const user =await prisma.user.create({
        data:req.body
    })
    res.json(user)

});

export default userRouter;

