const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://swagatmishra:lkQ6cIAeTtyul29m@md-cluster.aifwhrc.mongodb.net/ecommerce");
        console.log("DB Connected Successfully");
    } catch (err) {
        console.log(err);
    }
}

connectDB();

exports.connectDB = connectDB;

/*
connect();
uri, options, callback

const options = {
    username: 'Swagat',
    password: 'Pas$w0rd',
    dbName: 'Ecommerce',
    authSource: 'Ecommerce',
    useNewUrlParse: true
}
 */
