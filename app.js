const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./src/controllers/error");
const { appConfig } = require("./src/config/constant");
const User = require("./src/models/user");
const connectDatabase = require("./src/config/dbConnect");
const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

const adminRoutes = require("./src/routes/admin");
const shopRoutes = require("./src/routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById('656c003109d8fc40fad9a6e6')
  .then(user => {
    req.user = user;
    next();
  })
  .catch(err => console.log(error))
})

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// app.use(errorController.get404);

app.listen(appConfig.port, async () => {
  console.log("listening on port ", appConfig.port);
  await connectDatabase();
  User.findOne().then((user) => {
    if (!user) {
      const user = new User({
        name: "abc",
        email: "abc@gmail.com",
        cart: {
          items: [],
        },
      });
      user.save();
    }
  });
});
