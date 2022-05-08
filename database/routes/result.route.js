module.exports = (app) => {
    const results = require("../controllers/result.control.js");
    var router = require("express").Router();

    router.post("/", results.create);
    router.get("/", results.findAll);
    router.get("/:id", results.findOne);
    router.put("/:id", results.update);
    router.delete("/:id", results.delete);
    router.delete("/", results.deleteAll);

    app.use("/results", router);
};