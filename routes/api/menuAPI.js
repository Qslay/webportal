/**
 * api URL => /api/menu
 */
const express = require('express');
const router = express.Router();

const User = require('../../models/user');
const Menu = require('../../models/menu');
const Category = require('../../models/category');
const Item = require('../../models/item');

const _ = require('lodash');
const l = require('./tools/loginCheck');

router.get('/getmenu/:id', l.isLoggedIn, async function (req, res, next) {
  try {
    let id = req.params.id;
    if (req.isAuthenticated()) {
      let _menu = await Menu
        .findOne({
          user: id
        })
        .populate({
          path: 'categories',
          populate: {
            path: 'items'
          }
        }).exec();
      if (!_.isEmpty(_menu)) {
        res.status(200).json(_menu);
      }
    }
    res.status(400).json({});
  } catch (e) {
    console.error(e);
  }
});

router.post('/', l.isLoggedIn, async function (req, res) {
  try {
    console.log(req.body);
    let _menuName = req.body.menu;
    let _data = {
      name: _menuName,
      publish: false,
      user:req.user.id
    };
    let _menu = await Menu.create(_data);
    if (!_.isEmpty(_menu)) {
      res.status(200).json(_menu);
    }
  } catch (e) {
    console.error(e);
  }
});

router.post('/category/', l.isLoggedIn, async function (req, res) {
  try {
    console.log(req.body);
    let _categoryName = req.body.category;

    let _data = {
      name: _categoryName
    };

    let _category = await Category.create(_data);
    if (!_.isEmpty(_category)) {
      res.status(200).json(_category);
    }
  } catch (e) {
    console.error(e);
  }
});

router.post('/item/:id', l.isLoggedIn, function (req, res) {
  try {

  } catch (e) {
    console.error(e);
  }
});
module.exports = router;