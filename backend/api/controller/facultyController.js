import * as facultyService from '../service/facultyService.js';

// sends success response and http code to the client
const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

// sends error response and http code to the client
// 
const setError = (err, response) => {
    response.status(500);
    response.json(err);
}

export const post = async (req, res) => {
    try {
        const faculty = req.body;
        const savedFaculty = await facultyService.save(faculty);
        setResponse(savedFaculty, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const get = async (req, res) => {
    try {
        const faculties = await facultyService.listAll();
        setResponse(faculties, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const getById = async (req, res) => {
    try {
        const faculty = await facultyService.getFacultyById(req.params.id);
        setResponse(faculty, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const update = async (req, res) => {
    try {
        const faculty = await facultyService.update(req.params.id, req.body);
        setResponse(faculty, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const remove = async (req, res) => {
    try {
        const responseMessage = facultyService.remove(req.params.id);
        setResponse(responseMessage, res);
    }
    catch (error) {
        setError(error, res);
    }
}