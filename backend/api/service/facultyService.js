import Faculty from '../model/Faculty.js';
import Course from '../model/Course.js';

export const save = async (faculty) => {
    const newFaculty = new Faculty(faculty);
    return newFaculty.save();
}

export const listAll = async () => {
    const faculties = Faculty.find();
    return faculties;
}

export const getFacultyById = async (id) => {

    // returns faculty name by given faculty id
    let facultyName;
    await Faculty.findById(id).select({ name: 1 })
        .then(data => {
            facultyName = JSON.parse(JSON.stringify(data))
        });

    // returns courseId by given faculty id
    let facultyCourseId;
    await Faculty.findById(id).select({ courseId: 1 })
        .then(data => {
            facultyCourseId = data.courseId
        });

    // returns course details by given course id
    let facultyCourses;
    await Course.find({ _id: { $in: facultyCourseId } })
        .then(data => {
            facultyCourses = JSON.parse(`{ "courses": ${JSON.stringify(data)}}`)
        })

    // combine facultyName and facultyCourses json object
    let faculty = {};
    Object.assign(faculty, facultyName, facultyCourses);

    return faculty;
}

export const update = async (id, updatedFaculty) => {
    const faculty = await Faculty.findById(id);

    if (!faculty) return;

    faculty.set(updatedFaculty);

    return faculty.save();
}

export const remove = async (id) => {
    return Faculty.deleteOne({ _id: id })
}