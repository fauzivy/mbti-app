const express = require("express");
const cors = require('cors');
const app = express();
var corsOptions = { origin: "http://localhost:8081"};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

require("./routes/mbti.route.js")(app);
require("./routes/result.route.js")(app);

app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});