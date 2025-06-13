const Course = require("../models/course")
const { mutipleMongooseToObject } = require('../../util/mongoose')
class MeController {

    // [GET] /me/stored/courses
    storedCourse(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) => res.render('me/stored-courses', {
                deleteCount,
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)

    }

    // [GET] /me/trash/courses  su dung findWithDeleted
    trashCourse(req, res, next) {
        Course.findDeleted()
            .then(courses => res.render('me/trash-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)

    }
}

module.exports = new MeController();
