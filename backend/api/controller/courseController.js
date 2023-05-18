import * as courseService from '../service/courseService.js';

// sends success response and http code to the client
const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

// sends error response and http code to the client
const setError = (err, response) => {
    response.status(500);
    response.json(err);
}

export const post = async (req, res) => {
    try {
        const course = req.body;
        const savedCourse = await courseService.save(course);
        setResponse(savedCourse, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const get = async (req, res) => {
    try {
        const courses = await courseService.listAll();
        setResponse(courses, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const getById = async (req, res) => {
    try {
        const course = await courseService.getCourseById(req.params.id);
        setResponse(course, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const findByMajorId = async (req, res) => {
    try {
        const courses = await courseService.findByMajorId(req.query.majorId);
        setResponse(courses, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const update = async (req, res) => {
    try {
        const course = await courseService.update(req.params.id, req.body);
        setResponse(course, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const remove = async (req, res) => {
    try {
        const responseMessage = await courseService.remove(req.params.id);
        setResponse(responseMessage, res);
    }
    catch (error) {
        setError(error, res);
    }
}