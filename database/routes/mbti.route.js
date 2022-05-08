module.exports = (app) => {
    const mbti = require("../controllers/mbti.control.js");
    var router = require("express").Router();

    router.post("/", mbti.create);
    router.get("/", mbti.findAll);
    router.get("/:id", mbti.findOne);
    router.put("/:id", mbti.update);
    router.delete("/:id", mbti.delete);
    router.delete("/", mbti.deleteAll);

    app.use("/mbti", router);
};