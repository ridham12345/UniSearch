import express from "express";
import * as courseController from '../controller/courseController.js';

const Router = express.Router();

Router.route('/add')
    .post(courseController.post);

Router.route('/all')
    .get(courseController.get);

Router.route("/:id")
    .get(courseController.getById);

Router.route('/')
    .get(courseController.findByMajorId);

Router.route('/:id')
    .put(courseController.update);

Router.route('/:id')
    .delete(courseController.remove);

export default Router;