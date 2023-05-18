import express from "express";
import * as facultyController from '../controller/facultyController.js';

const Router = express.Router();

Router.route('/add')
    .post(facultyController.post);

Router.route('/all')
    .get(facultyController.get);

Router.route("/:id")
    .get(facultyController.getById);

Router.route('/:id')
    .put(facultyController.update);

Router.route('/:id')
    .delete(facultyController.remove);

export default Router;