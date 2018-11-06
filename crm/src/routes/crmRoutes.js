import { addNewContact,
        getContacts,
        updateContact,
        deleteContact,
        getContactWithID } from '../controllers/crmController';

const routes = (app) => {
    app.route('/fetch')
    .get((req, res, next) => {
        // middleware
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)

    // POST endpoint
    .post(addNewContact);

    app.route('/fetch/:userId')
    // get specific contact
    .get(getContactWithID)

    // put request
    .put(updateContact)

    // delete request
    .delete(deleteContact);
}

export default routes;
