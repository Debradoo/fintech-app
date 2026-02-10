import expres from "express";
import { askAI } from "../controllers/ai.controller";

const aiRouter = expres.Router();

aiRouter.post("/ask", askAI);


export default aiRouter;