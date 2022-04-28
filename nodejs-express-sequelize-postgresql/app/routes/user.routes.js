const { verifySignUp } = require("../middleware");
const controller = require("../controllers/user.controller.js");

module.exports = app => {
    // var router = require("express").Router();
    // router.post("/", user.create);
    // app.use('/api/user', router);
    app.post(
      "/api/signup",
      [
        verifySignUp.checkDuplicateUsernameOrEmail,
      ],
      controller.signup
    );
  
    app.post("/api/signin", controller.signin);
  };