import pool from "../configs/connectDB";


let getAllUsers = async (req, res) => {
    const [rows, field] = await pool.execute('select * from users');
    res.status(200).json({
        message: 'oke',
        data: rows
    })
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'thieu du lieu r'
        })
    }
    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)', [firstName, lastName, email, address]);

    res.status(200).json({
        message: 'oke'
    })
}

let updateUser = async (req, res) => {

    let { firstName, lastName, email, address, id } = req.body;

    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: 'thieu du lieu r'
        })
    }
    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where ID = ?',
        [firstName, lastName, email, address, id]);


    res.status(200).json({
        message: 'oke'
    })
}

let deleteUser = async (req, res) => {
    let userID = req.params.id;

    if (!userID) {
        return res.status(200).json({
            message: 'thieu du lieu r'
        })
    }

    await pool.execute(`delete from users where id = ${userID}`);

    res.status(200).json({
        message: 'oke'
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}