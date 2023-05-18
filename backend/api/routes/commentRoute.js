import express from "express";
import * as commentController from '../controller/commentController.js';

const Router = express.Router();

Router.route('/add')
    .post(commentController.post);

Router.route('/all')
    .get(commentController.get);

Router.route("/:id")
    .get(commentController.findById);

Router.route('/:id')
    .put(commentController.update);

Router.route('/:id')
    .delete(commentController.remove);

export default Router;