var express = require("express");

var router = express.Router();

// Import the model (bucketlist.js) to use its database functions.
var bucketItem = require("../models/bucketlist.js");

// when the home page is hit get all the data using the method defined by
//the bucketItem js that reaches back to the custom orm that we built
router.get("/", function(req, res) {
  bucketItem.all((data)=> {
    var hbsObject = {
      bucketItem: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/bucketItems", function(req, res) {
  bucketItem.create([
    "bucketItem_name", "complete"
  ], [
    req.body.bucketItem_name, req.body.complete
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.id });
  });
});

router.put("/api/bucketItems/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  bucketItem.update({
    complete: req.body.complete
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
