import * as majorService from '../service/majorService.js';

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
        const major = req.body;
        const savedMajor = await majorService.save(major);
        setResponse(savedMajor, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const get = async (req, res) => {
    try {
        const majors = await majorService.listAll();
        setResponse(majors, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const findById = async (req, res) => {
    try {
        const major = await majorService.findMajorById(req.params.id);
        setResponse(major, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const findByUniversityId = async (req, res) => {
    try {
        const majors = await majorService.findByUniversityId(req.query.universityId);
        setResponse(majors, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const listUniversitiesByMajorName = async (req, res) => {
    try {
        const majorName = req.params.majorName
        const majors = await majorService.listUniversitiesByMajorName(majorName);
        setResponse(majors, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const update = async (req, res) => {
    try {
        const major = await majorService.update(req.params.id, req.body);
        setResponse(major, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const remove = async (req, res) => {
    try {
        const responseMessage = await majorService.remove(req.params.id);
        setResponse(responseMessage, res);
    }
    catch (error) {
        setError(error, res);
    }
}