import type {  Response } from "express";
import prisma from "../config/prisma";
import { categorizeTransaction } from "../services/transactionAI.service";
import type { AuthRequest } from "../middlewares/auth.middleware";


export const createTransaction = async(req:AuthRequest, res:Response) =>{
    try{
        const {amount,description} = req.body

        const userId = req.userId  as string 
       

        const category=await categorizeTransaction(description) as string

         const transaction =await prisma.transaction.create({
            data:
            {amount,description,category,userId}
        })
        res.status(201).json({ category })
    }catch(err){console.log(err)
        res.status(500).json({
            message:"Transaction creation failed"
        })
    }
}