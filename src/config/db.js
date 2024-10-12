const mongoose = require('mongoose');

const dbConnect = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("database connection established:",connect.connection.host,connect.connection.port)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


module.exports = dbConnect;

