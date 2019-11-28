const moment = require('moment')

// middleware function
const logger = (req, res, next) => {

    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()}`);
    next()
}
//init middleware



module.exports = logger;