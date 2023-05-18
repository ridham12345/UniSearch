import Course from '../model/Course.js';
import Faculty from '../model/Faculty.js';

export const save = async (course) => {
    const newCourse = new Course(course);
    return newCourse.save();
}

export const listAll = async () => {
    const courses = Course.find();
    return courses;
}

export const getCourseById = async (id) => {
    const course = Course.findById(id)
    return course;
}

export const findByMajorId = async (majorId) => {
    const courses = Course.find({ "majorId": majorId })
    return courses;
}

export const update = async (id, updatedCourse) => {
    const course = await Course.findById(id);

    if (!course) return;

    course.set(updatedCourse);

    return course.save();
}

export const remove = async (id) => {

    // Deletes course by given courseId
    const deleteCourseAndUpdateFaculty = Course.deleteOne({ _id: id })
        .then(async () => {
            // Finds all the faculties that teaches this specific course
            let faculties;
            await Faculty.find({ courseId: { $in: id } })
                .then(async (data) => {
                    faculties = data
                    // Looping thru the faculty object
                    for (var i = 0; i < faculties.length; i++) {
                        // Looping thru the coursesId array for specific faculty
                        for (var j = 0; j < faculties[i].courseId.length; j++) {
                            // Condition to check if the 'courseId' matchs with given 'id'
                            if (faculties[i].courseId[j] === id) {
                                // Remove the courseId from the courseId array for given specific faculty
                                faculties[i].courseId.splice(j, 1);
                                // Update the faculty object with new courseId array
                                faculties[i].set(JSON.parse(`{"courseId": ${JSON.stringify(faculties[i].courseId)}}`))
                                // Save the new faculty object into database
                                faculties[i].save();
                            }
                        }
                    }
                });
        }
        )
    return deleteCourseAndUpdateFaculty;
}