"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const operation_controller_1 = require("../controllers/operation.controller");
const router = express_1.Router();
router.route('/index').get(index_controller_1.index);
router.route('/test').post(operation_controller_1.test);
exports.default = router;
