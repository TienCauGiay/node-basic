import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/about', homeController.getAboutPage);

    router.get('/detail/user/:userID', homeController.getDetailPage);

    router.get('/update/user/:userID', homeController.updateUser);

    router.post('/create-new-user', homeController.createNewUser);

    router.post('/delete-user', homeController.deleteUser);

    router.post('/update-user', homeController.updateInfoUser);

    return app.use('/', router)
}

export default initWebRouter;