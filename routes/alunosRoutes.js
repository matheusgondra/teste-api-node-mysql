import express from "express";
import AlunosController from "../controllers/AlunosController.js";

const router = express.Router();

router
   .get("/alunos", AlunosController.getAlunos)
   .get("/alunos/:id", AlunosController.getAlunoById)
   .post("/alunos", AlunosController.createAluno)
   .delete("/alunos/:id", AlunosController.deleteAluno);

export default router;