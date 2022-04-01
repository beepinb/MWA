const MongoClient = require("mongodb").MongoClient;

let _connection = null;

const open = function () {
    if (get() == null) {
        MongoClient.connect(process.env.DB_Url, function (err, client) {
            if (err) {
                console.log("Failed to connect with database");
                return;
            }
            _connection = client.db(process.env.DB_Name);
            console.log("Connection established with database sucessfully");
        });
    }
};

const get = function () {
    return _connection;
};

module.exports = {
    open,
    get,
};
