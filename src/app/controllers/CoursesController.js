const Course = require("../models/course")
const { mongooseToObject } = require('../../util/mongoose')
class CourseController {

    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course =>
                res.render('courses/show', { course: mongooseToObject(course) })
            )
            .catch(next)

    }
    // [GET] /course/create
    create(req, res, next) {
        res.render('courses/create')

    }
    // [GET] /course/store
    store(req, res, next) {
        // res.json(req.body)
        req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`
        const course = new Course(req.body)
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)

    }
    // [GET] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)

    }
    // [PUT] /course/:id/
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)

    }

    // [DELETE] /course/:id/
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)

    }


    // [DELETE] /course/:id/force
    force(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)

    }


    // [PATCH] /course/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => { return Course.updateOne({ _id: req.params.id }, { deleted: false }); })
            .then(() => res.redirect('/me/trash/courses'))
            .catch(next)

    }

    // [POST] /courses/handle-forms-action
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('/me/stored/courses'))
                    .catch(next)
                break;
            default:
                res.json({ message: 'bug' })
        }
    }
}

module.exports = new CourseController();
