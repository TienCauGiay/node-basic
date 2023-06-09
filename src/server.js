import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRouter from './route/web';
import initApiRoute from './route/api';
// import connection from './configs/connectDB';
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app);
// init web route
initWebRouter(app);
initApiRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
