import * as universityService from '../service/universityService.js'

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
        const university = req.body;
        const savedUniversity = await universityService.save(university);
        setResponse(savedUniversity, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const get = async (req, res) => {
    try {

        const universityName = req.query.universityName;
        const sortBy = req.query.sortBy;
        const ranking = req.query.ranking;
        const location = req.query.location;

        const universities = await universityService.listAll(universityName, sortBy, ranking, location);
        setResponse(universities, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const findById = async (req, res) => {
    try {
        const university = await universityService.findUniversityById(req.params.id);
        setResponse(university, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const update = async (req, res) => {
    try {
        const university = await universityService.update(req.params.id, req.body);
        setResponse(university, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const remove = async (req, res) => {
    try {
        const responseMessage = await universityService.remove(req.params.id);
        setResponse(responseMessage, res);
    }
    catch (error) {
        setError(error, res);
    }
}