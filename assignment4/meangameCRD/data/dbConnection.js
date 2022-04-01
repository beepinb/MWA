const MongoClient = require("mongodb").MongoClient;

let _connection = null;

const open = function () {
    if (get() == null) {
        MongoClient.connect(process.env.DB_Url, function (err, data) {
            if (err) {
                console.log("Failed to connect with database");
                return;
            }
            _connection = data.db(process.env.DB_Name);
            console.log("Connection with database established successfully");
        });
    }
}


const get = function () {
    return _connection;
}

module.exports = {
    open,
    get
}