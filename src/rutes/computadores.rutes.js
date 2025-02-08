import { Router } from "express";

import computadorasController from "../controllers/computadoras.controllers.js";

const router=Router();

router.get('/getAll', computadorasController.getAll);

router.get('/getOne/:_id', computadorasController.getOne);


router.post('/insert', computadorasController.insert);


router.post('/updateOne/:_id', computadorasController.updateOne);


router.post('/deleteOne/:_id', computadorasController.deleteOne);


export default router;
