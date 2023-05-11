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

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)', [firstName, lastName, email, address]);
    return res.redirect('/');
}

let deleteUser = async (req, res) => {
    await pool.execute(`delete from users where id = ${req.body.userId}`);
    return res.redirect('/');
}

let updateUser = async (req, res) => {
    let [user] = await pool.execute('select * from `users` where `ID` = ?', [req.params.userID]);
    return res.render('update.ejs', { user: user });
}

let updateInfoUser = async (req, res) => {
    let { firstName, lastName, email, address, userId } = req.body;
    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where ID = ?',
        [firstName, lastName, email, address, userId]);
    return res.redirect('/');
}

module.exports = {
    getHomePage,
    getAboutPage,
    getDetailPage,
    createNewUser,
    deleteUser,
    updateUser,
    updateInfoUser
}