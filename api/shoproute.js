// shop route js

const express = require('express');
const shopstoreRoutes = express.Router();

// Require dhopstore model in our routes module
let Shopstore = require('./shopmodel');

// Defined store route
shopstoreRoutes.route('/add').post(function (req, res) {
  let shopstore = new Shopstore(req.body);
  shopstore.save()
    .then(shopstore => {
      res.status(200).json({'shopstore': 'Item Added Sucessfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
shopstoreRoutes.route('/').get(function (req, res) {
    Shopstore.find(function(err, shopstore){
    if(err){
      console.log(err);
    }
    else {
      res.json(shopstore);
    }
  });
});

// Defined edit route
shopstoreRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Shopstore.findById(id, function (err, shopstore){
      res.json(shopstore);
  });
});

//  Defined update route
shopstoreRoutes.route('/update/:id').post(function (req, res) {
    Shopstore.findById(req.params.id, function(err, shopstore) {
    if (!shopstore)
      res.status(404).send("data is not found");
    else {
        shopstore.id = req.body.id;
        shopstore.jtype = req.body.jtype;
        shopstore.material = req.body.material;
        shopstore.stock = req.body.stock;
        shopstore.price = req.body.price;
        shopstore.description = req.body.description;

        shopstore.save().then(shopstore => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
shopstoreRoutes.route('/delete/:id').get(function (req, res) {
    Shopstore.findByIdAndRemove({_id: req.params.id}, function(err, shopstore){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = shopstoreRoutes;