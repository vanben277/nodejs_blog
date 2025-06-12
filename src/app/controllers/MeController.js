const Course = require("../models/course")
const { mutipleMongooseToObject } = require('../../util/mongoose')
class MeController {

    // [GET] /me/stored/courses
    storedCourse(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
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
