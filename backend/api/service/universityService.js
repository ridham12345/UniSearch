import University from '../model/University.js';
import * as majorService from './majorService.js';

export const save = async (university) => {
    const newUniversity = new University(university);
    return newUniversity.save();
}

export const listAll = async (universityName, sortBy, ranking, location) => {
    let universities;

    if (universityName === null || universityName === undefined) universityName = "";
    if (location === null || location === undefined) location = "";
    if (ranking === null || ranking === undefined) ranking = 100000;

    if (sortBy === null || sortBy === undefined || sortBy === "") {
        universities = await University.find({ 'location.name': { $regex: new RegExp("^.*?" + location.toLowerCase() + ".*?", "i") }, 'name': { $regex: new RegExp("^.*?" + universityName.toLowerCase() + ".*?", "i") }, 'ranking': { $lte: ranking } })
    }
    else {
        if (sortBy === "name") universities = await University.find({ 'location.name': { $regex: new RegExp("^.*?" + location.toLowerCase() + ".*?", "i") }, 'name': { $regex: new RegExp("^.*?" + universityName.toLowerCase() + ".*?", "i") }, 'ranking': { $lte: ranking } }).sort({ name: 1 })
        if (sortBy === "ranking") universities = await University.find({ 'location.name': { $regex: new RegExp("^.*?" + location.toLowerCase() + ".*?", "i") }, 'name': { $regex: new RegExp("^.*?" + universityName.toLowerCase() + ".*?", "i") }, 'ranking': { $lte: ranking } }).sort({ ranking: 1 })
        if (sortBy === "acceptanceRate") universities = await University.find({ 'location.name': { $regex: new RegExp("^.*?" + location.toLowerCase() + ".*?", "i") }, 'name': { $regex: new RegExp("^.*?" + universityName.toLowerCase() + ".*?", "i") }, 'ranking': { $lte: ranking } }).sort({ acceptanceRate: 1 })
        if (sortBy === "avgTuitionCost") universities = await University.find({ 'location.name': { $regex: new RegExp("^.*?" + location.toLowerCase() + ".*?", "i") }, 'name': { $regex: new RegExp("^.*?" + universityName.toLowerCase() + ".*?", "i") }, 'ranking': { $lte: ranking } }).sort({ avgTuitionCost: 1 })
    }
    return universities;
}

export const findUniversityById = async (id) => {
    const university = await University.findById(id)
    return university;
}

export const update = async (id, updatedUniversity) => {
    const university = await University.findById(id);

    if (!university) return;

    university.set(updatedUniversity);

    return university.save();
}

export const remove = async (id) => {
    const deleteUniversity = University.deleteOne({ _id: id })
        .then(async () => {
            let majors;
            await majorService.findByUniversityId(id)
                .then(async (data) => {
                    majors = data
                    for (var i = 0; i < majors.length; i++) {
                        await majorService.remove(majors[i]._id)
                    }
                })
        })
    return deleteUniversity;
}