/*
  SCRAPER BOT for HN
*/

//modules
var events = require('events'),
    cheerio = require('cheerio'),
    jsdom = require('jsdom'),
    request = require('request'),
    _ = require('underscore'),
    readability = require('node-readability'),
    fs = require('fs');

var jquery = fs.readFileSync("./public/javascripts/jquery-2.1.0.js", "utf-8");
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};


var Hackernews = (function() {
  

  __extends(Hackernews, events.EventEmitter);
  function Hackernews(dev) {
    if(dev){
      this.base = 'http://news.ycombinator.com';
      this.news = this.base + '/news';
      this.newest = this.base + '/newest';
      this.ask = this.base + '/ask';
    }
    this.base = 'http://news.ycombinator.com';
    this.news = this.base + '/news';
    this.newest = this.base + '/newest';
    this.ask = this.base + '/ask';
  }
 
  //scrape_int: scrapes webpages of http://ycombinator.com and producs and array of objects (each one for each post)
  Hackernews.prototype.scrape_int = function (URL, callback) {
    var self = this;
    return jsdom.env({url: self.base+URL, src:[jquery], done: function(err, win) {
        var $, posts, i;
        $ = win.$;
        posts = [];
        i = 0;
        //Do some magic here: Google JSdom tutorials to get an idea of how to do this!
        if (callback != null) {
          return callback(posts);
        }
      }
    });
  };


  

module.exports = Hackernews;