import { Router } from "express";

import computadorasController from "../controllers/computadoras.controllers.js";

const router=Router();

router.get('/getAll', computadorasController.getAll);

export default router;
