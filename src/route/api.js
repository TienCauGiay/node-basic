import express from 'express';

import apiController from '../controller/APIController';

let router = express.Router();

const initApiRoute = (app) => {
    router.get('/users', apiController.getAllUsers);

    router.post('/new-user', apiController.createNewUser);

    router.put('/update-user', apiController.updateUser);

    router.delete('/delete-user/:id', apiController.deleteUser);

    return app.use('/api/v1/', router)
}

export default initApiRoute;