import pool from "../configs/connectDB";

let getHomePage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM `users`');

    return res.render('index.ejs', { dataUser: rows });
}

let getAboutPage = async (req, res) => {
    return res.send('Co gang lam viec, thanh cong se den');
}

let getDetailPage = async (req, res) => {
    let ID = req.params.userID;
    let [user, fields] = await pool.execute('select * from `users` where `ID` = ?', [ID]);
    return res.send(JSON.stringify(user));
}

module.exports = {
    getHomePage,
    getAboutPage,
    getDetailPage
}