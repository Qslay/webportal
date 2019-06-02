/**
 * api URL => /api/menu
 */
const express = require('express');
const router = express.Router();
const csrf = require('csurf');

const User = require('../../models/user');
const Menu = require('../../models/menu');
const Category = require('../../models/category');
const Item = require('../../models/item');

const _ = require('lodash');

const csrfProtection = csrf({ cookie: true })

/* GET home page. */
router.get('/getmenu/:id', csrfProtection, async function (req, res, next) {
  try{
    let id = req.params.id;
    if(req.isAuthenticated()){
      let _menu = await Menu
      .findOne({user : id})
      .populate({
        path:'categories',
        populate:{path : 'items'}
      }).exec();
      if(!_.isEmpty(_menu)){
        res.status(200).json(_menu);
      }
    }
    res.status(400).json({});
  }catch(e){
    console.error(e);
  }
});

router.post('/menu/:id', csrfProtection, async function (req, res) {
  try{
    let _menuName = req.body.name;
    let _data = {
      user : req.user.id,
      name : _menuName
    };
    let _menu = await Menu.create(_data);
    if(! _.isEmpty(_menu)){
      res.status(200).json(_menu);
    }
  }                                                                                                                                                                     
  catch(e){
    console.error(e);
  }
});

router.post('/category/:id', csrfProtection, function (req, res) {
  try{

  }
  catch(e){
    console.error(e);
  }
});

router.post('/item/:id', csrfProtection, function (req, res) {
  try{

  }
  catch(e){
    console.error(e);
  }
});
module.exports = router;
