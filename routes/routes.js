// import other routes
const userRoutes = require('./count');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;