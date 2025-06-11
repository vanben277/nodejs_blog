const newRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    // Home, search, contact viet chung vao site neu co nhieu trang thi tach rieng

    app.use('/news', newRouter);

    app.use('/me', meRouter);

    app.use('/course', coursesRouter);

    app.use('/', siteRouter);
}

module.exports = route;
