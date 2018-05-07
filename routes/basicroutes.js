module.exports = function(app){
    app.get("/test", function(req, res){
        res.send("hi");
    })

    app.get("/another", function(req, res){
        res.send("another hi");
    })
}