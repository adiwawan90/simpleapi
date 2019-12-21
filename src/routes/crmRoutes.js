// untuk menggunakan routes agar dapat menggunakan fungsi add new Contact from Controller must import first
import { addNewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controller/crmController'
// import { json } from 'body-parser';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // ini middleware
            console.log(req.originalUrl);
            console.log(req.method)
            next();
        }, getContacts)

        // .post((req, res) => res.send('POST request successfull'));
        // we can just use funct addNewContact from crmController !
        .post(addNewContact);

    app.route('/contact/:contactID')
        .get(getContactWithID)
        .put(updateContact)
        .delete(deleteContact)
}
export default routes;