import express from "express";
import * as majorController from '../controller/majorController.js';

const Router = express.Router();

Router.route('/add')
    .post(majorController.post);

Router.route('/all')
    .get(majorController.get);

Router.route("/:id")
    .get(majorController.findById);

Router.route('/')
    .get(majorController.findByUniversityId);

Router.route('/listUniversitiesByMajorName/:majorName')
    .get(majorController.listUniversitiesByMajorName);

Router.route('/:id')
    .put(majorController.update);

Router.route('/:id')
    .delete(majorController.remove);

export default Router;