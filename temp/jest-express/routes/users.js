var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(200).json([{ name: "John Doe" }]);
});

module.exports = router;
