import * as commentService from '../service/commentService.js';

// sends success response and http code to the client
const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

// sends error response and http code to  client 
const setError = (err, response) => {
    response.status(500);
    response.json(err);
}

export const post = async (req, res) => {
    try {
        const comment = req.body;
        const savedComment = await commentService.save(comment);
        setResponse(savedComment, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const get = async (req, res) => {
    try {
        const universityId = req.query.universityId;

        const comments = await commentService.listAll(universityId);
        setResponse(comments, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const findById = async (req, res) => {
    try {
        const comment = await commentService.findCommentById(req.params.id);
        setResponse(comment, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const update = async (req, res) => {
    try {
        const comment = await commentService.update(req.params.id, req.body);
        setResponse(comment, res);
    }
    catch (error) {
        setError(error, res);
    }
}

export const remove = async (req, res) => {
    try {
        const responseMessage = await commentService.remove(req.params.id);
        setResponse(responseMessage, res);
    }
    catch (error) {
        setError(error, res);
    }
}