"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// const express = require('express');
// const Router = express.Router;
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
router.post('/', todos_1.createTodo);
router.get('/');
router.patch('/:id');
router.delete('/:id');
exports.default = router;
