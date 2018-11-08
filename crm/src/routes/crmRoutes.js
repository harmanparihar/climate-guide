import { addNewPost,
        getPosts,
        updatePost,
        deletePost,
        getPostWithID } from '../controllers/crmController';

const routes = (app) => {
    app.route('/fetch')
    .get((req, res, next) => {
        // middleware
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getPosts)

    // POST endpoint
    .post((req, res, next) => {
        // middleware
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, addNewPost)

    app.route('/fetch/:userId')
    .get((req, res, next) => {
        // middleware
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getPostWithID)

    // put request
    .put(updatePost)

    // delete request
    .delete(deletePost);
}

export default routes;
