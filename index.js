const MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://0.0.0.0:27017", function (err, db) {
    if (err) throw err;
    const dbo = db.db("test");
    const myobj = [{
        _id: 1,
        "accesslevel": "super admin"
        },
        {
            _id: 2,
            "accesslevel": "admin"
            },
            {
                _id: 3,
                "accesslevel": "user"
                }];

    dbo.collection("accesslevel").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("inserted");
        db.close();
    });
});


