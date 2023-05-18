import Major from '../model/Major.js';
import University from '../model/University.js'
import * as courseService from './courseService.js';

export const save = async (major) => {
    const newMajor = new Major(major);
    return newMajor.save();
}

export const listAll = async () => {
    const majors = Major.find();
    return majors;
}

export const findMajorById = async (id) => {
    const major = Major.findById(id)
    return major;
}

export const findByUniversityId = async (universityId) => {
    const majors = Major.find({ "universityId": universityId })
    return majors;
}

export const listUniversitiesByMajorName = async (majorName) => {
    let majorUniversityIds;
    let universities = [];

    await Major.find({ "name": { $regex: new RegExp("^.*?" + majorName.toLowerCase() + ".*?", "i") } })
        .select({ universityId: 1 })
        .then(async (data) => {
            majorUniversityIds = data
        })

    for (var i = 0; i < majorUniversityIds.length; i++) {
        await University.findOne({ _id: majorUniversityIds[i].universityId })
            .then(async (university) => {
                universities.push(university);
            })
    }
    return universities;
}

export const update = async (id, updatedMajor) => {
    const major = await Major.findById(id);

    if (!major) return;

    major.set(updatedMajor);

    return major.save();
}

export const remove = async (id) => {
    const deleteMajor = Major.deleteOne({ _id: id })
        .then(async () => {
            let courses
            // find all courses in a specific major
            await courseService.findByMajorId(id)
                .then(async (data) => {
                    courses = data
                    // Looping thru courses object
                    for (var i = 0; i < courses.length; i++) {
                        // Delete course by id
                        await courseService.remove(courses[i]._id);
                    }
                });
        });
    return deleteMajor;
}