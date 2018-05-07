var userArr = require("../data/user.js");
module.exports = function(app){
    app.get("/showUsers", function(req, res){
        //res.json(userArr);
        res.send(userArr);
    })
}