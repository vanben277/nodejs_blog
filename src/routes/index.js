const newRouter = require('./news');
const siteRouter = require('./site');
function route(app) {

    // Home, search, contact viet chung vao site neu co nhieu trang thi tach rieng 

    app.use('/news', newRouter);


    app.use('/', siteRouter);

}

module.exports = route;