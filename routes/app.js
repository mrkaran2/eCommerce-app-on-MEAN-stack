var express = require('express');
var User = require('../models/users.model');
var Item = require('../models/items.model');
var router = express.Router();


router.get('/cart', function (req, res, next) {
    res.redirect('home');
    //res.render('index');
});




router.delete('/deletecartitem/:id', function (req, res, next) {
    console.log(req.body.id);
    console.log(req.param.id);

    Item.remove({_id: req.params.id}).exec(function (err, items) {
        if(err) {
            return res.status(500).json({
                message: 'problem',
                obj: err
            });
        }
        res.status(200).json({
            obj: items
        });

});
});


router.patch('/deletefromcart/:id', function (req, res, next) {
    User.update({name:"karan"},{$pullAll: { currentCartItems: [ req.params.id ]}})
        .exec(function (err, items) {
        if(err) {
            return res.status(500).json({
                message: 'problem',
                obj: err
            });
        }
        res.status(200).json({
            obj: items
        });

    });
});

router.patch('/addtocart/:id', function (req, res, next) {
    User.update({name:"karan"},{$push: { currentCartItems: [ req.params.id ]}})
        .exec(function (err, items) {
            if(err) {
                return res.status(500).json({
                    message: 'problem',
                    obj: err
                });
            }
            res.status(200).json({
                obj: items
            });

        });
});




router.get('/cartitems', function (req, res, next) {
   Item.find().exec( function (err, items) {
       if(err) {
           return res.status(500).json({
               message: 'problem',
               obj: err
           });
       }
       res.status(200).json({
           obj: items
       });
   });
});


router.post('/cart', function (req, res, next) {
    //console.log("------" + req.body.name);
    var item = new Item({
        name: req.body.name
    });
    item.save( function (err, result) {
        if(err) {
            console.log(err);
            return res.status(500).json({
                title: 'error occured',
                error: err
        });
        }
        res.status(201).json({
            message: 'data saved',
            obj: result
        });
    });
});



router.get('/items/:id', function (req, res, next) {
    Item.findOne({_id: req.params.id}).exec( function (err, items) {
        if(err) {
            console.log("not found");
            return res.status(500).json({
                message: 'problem',
                obj: err
            });
        }
        console.log(items);
        res.status(200).json({
            obj: items
        });
    });
});


router.get('/:user/cart', function(req,res) {
   console.log(req.params.user);
    User.findOne({name: req.params.user}).exec( function (err, user) {
        console.log(user);
        if(err) {
            return res.status(500).json({
                message: 'problem',
                obj: err
            });
        }
        res.status(201).json({
            obj: user.currentCartItems
        });
    });
});

router.get('/', function (req, res, next) {
    res.render('index');
});



module.exports = router;
