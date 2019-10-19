import { Router } from "express";
import { index } from "../controllers/index.controller";
import { test } from "../controllers/operation.controller";

const router = Router();

router.route('/index').get(index);
router.route('/test').post(test);

export default router;