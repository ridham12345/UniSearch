import express from "express";
import * as universityController from '../controller/universityController.js';

const Router = express.Router();

Router.route('/add')
    .post(universityController.post);

Router.route('/all')
    .get(universityController.get);

Router.route("/:id")
    .get(universityController.findById);

Router.route('/:id')
    .put(universityController.update);

Router.route('/:id')
    .delete(universityController.remove);

export default Router;