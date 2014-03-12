var Hackernews = require('./../hackernews'),
		index = require('./index'),
		async = require('async'),
		_ = require("underscore");
var hn_bot = new Hackernews(); 

var Post_Model = exports.Model = function(){
	var model = {};
	model.top = [], model.newest = [];
	return {
		//Return some things to make a method: hint look at "Javascript - The Good Parts" Section on Objects
	};
}();

/* UTILITY functions */
var sort_by = function(field1, field2, reverse, primer){
	//Set sorting property to return val of primer func or just to object prop field
	if(primer){
			if(field2){
				key = (field2 === "date" ? 
					function(x){return primer(x[field1][field2].valueOf());} : 
					function(x){return primer(x[field1][field2]);} );
			}else {
				key = (field2 === "date" ? 
					function(x){return primer(x[field1].valueOf());} : 
					function(x){return primer(x[field1]);} );
			}
	} 
	else{
			if(field2){
				key = (field2 === "date" ? 
					function(x){return x[field1][field2].valueOf();} : 
					function(x){return x[field1][field2];} );      
			}else {
				key = (field2 === "date" ? 
					function(x){return primer(x[field1].valueOf());} : 
					function(x){return primer(x[field1]);} );
			}            
	}

	//make sure that you receive a 1 or a 0, by using double not operators
	reverse = [-1, 1][+!!reverse];

	//Return our callback function to sort
	return function (a, b) {
		 return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
	} 
};

var find_obj_by_id = function(ObjectsList, wanted_id){
	var obj_match;
	for(var i = 0, obj_match = null; i < ObjectsList.length; ++i) {
			if(ObjectsList[i].id != wanted_id)
					continue;
			obj_match = ObjectsList[i];
			break;
	}

	return [obj_match, obj_match.id];
};

var array_objs_equal = function (a,b) { 
	
	if(a.length == b.length){
		for(var i=0; i < a.length-1; i++){
			if(a[i].id == b[i].id){ 
				continue;
			}else {
				return 0;
			}
		}	
	}else {
		return 0;
	}
	return 1;
}

/* Get data scraper by hackernews.js and save it into Post_Model*/
var scrapeNews = function(req, res, no_res, type){
	var date = new Date();
	function scrapeResp (posts){
		//Maybe this is related to another scraping func? (hint:callback funcs!)
	}


	hn_bot.scrape_int(/*what do I need to do here? hint: look at hackernews.js file!*/); 


	return;
};
/* Order news list by options passed by url parameters (look at express.js api for req.params!)*/
var sortNews = function (req, res) {
	if ( !Post_Model.get("top") ){
		getNews(req,res, 1);
	}
	if(req.params.option === "points"){
		res.send( /* sort array by 'points' using .sort and sort_by */ );
	} else{
		res.send(/* do the samething as in line 97, only sort by date now!*/);
	}
};

var upvotePost = function (req,res) {
	var arr = Post_Model.get("top");
	//curr_obj = [object, index_of_object]
	var curr_obj = find_obj_by_id(arr, req.query.id);

	var curr_points = parseInt(curr_obj[0].info.points, 10) + 1;
	curr_obj[0].info.points = curr_points+'';

	Post_Model.set_obj(curr_obj[0], curr_obj[1], "top");

	res.send(curr_obj[0]);
};

var upvoteArticle = function (req,res) {
	var arr = Post_Model.get("top");

	//curr_obj = [object, index_of_object]
	var curr_obj = find_obj_by_id(arr, req.query.id);

	var curr_points = parseInt(curr_obj[0].info.points, 10) + 1;
	curr_obj[0].info.points = curr_points+'';

	var obj = Post_Model.set_obj(curr_obj[0], curr_obj[1], "top");

	res.send(obj);
}

//Sort newest posts as seen on news.ycombinator.com/newest by points
var getTrending = function(req,res) {
	/* Do something here to sort an array of objects */
	res.send(/*send your sorted array to the client*/);
};

exports.middleware = function(req,res){
	if(req.params.type === "all"){
		scrapeNews(/*some passed values*/);
	}else if(req.params.type === /*some param*/) {
		/*some func to call */
	}else if(req.params.type === /*some param*/) {
		/*some func to call */
	}
		/* ... and so on ... and so on */
		/*...
		  ...
		  ...
		  ...*/
	//ERROR handling - you don't need to worry about this!
	else{
		res.render('error', {
				message: "404: Page Does Not Exist",
				error: '404'
		});
	}
};
