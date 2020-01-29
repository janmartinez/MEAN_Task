const Tasks = require("../controllers/task");

module.exports = function(app) {
    app.get("/tasks", Tasks.getAll);
    app.post("/tasks", Tasks.create);
    app.get("/tasks/:_id", Tasks.getOne);
    app.put("/tasks/:_id", Tasks.update);
    app.delete("/tasks/:_id", Tasks.delete);
}
