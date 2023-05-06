
let getHomePage = (req, res) => {
    return res.render('index.ejs');
}

let getAboutPage = (req, res) => {
    return res.send('Co gang lam viec nhe, thanh cong se den');
}

module.exports = {
    getHomePage,
    getAboutPage
}