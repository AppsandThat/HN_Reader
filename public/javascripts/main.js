
var renderAllPosts = function (Posts) {
  
  //render handlebars.js template - hint: look at handlebarsjs.com 

  //Below formst the time so it outputs nicely - you don't need to change this part!
  var format_time = function () {
    var date_string;
    for(var i=0; i < Posts.length; i++) {
      date_string = Posts[i].info.date ? new Date(Posts[i].info.date) : null;
      if(date_string) { Posts[i].info.date = date_string.toLocaleTimeString("en-US",time_options); }
    }
  }();
  
}

var renderForm = function (Form) {
  //render handlebars.js template - hint: look at handlebarsjs.com 
}

var updatePost = function (post) {
  //Update specific post with data inside 'post' object (e.g. increment the counter)
}

var eventHandler = function (event) {
  var event_class = $(event.target).attr("class").split(" ")[$(event.target).attr("class").split(" ").length-1], 
      ajax_path = //make this whatever you want your base parameter (i.e. example.com/baseparam, to be
 
  /* CLIENT-SIDE route handling */


  if( /*ifyou clicked upvote*/) {
    client[ip][parseInt(post_id)].vote++;
    ajax_path += "upvote?id="+post_id;
  }
  else /*if you clicked "sort by date/points" or some other button*/{
    $(".ui.progress.striped").show();
    if( $(event.target).hasClass("sort") ){
      ajax_path += "sort/" + event.target.id;
    }
    else{
      ajax_path += event_id;
    }
  }
  console.log(ajax_path);
  $.get( ajax_path, function (data) {
    //Make sure to hide your progress wheel/bar when you get to this point!

    //Send AJAX response to server based on what the class/id/tagName of event.target o
    //or parent of event.target (event.target is the element that was clicked)
  });
  return;
}





$(function() {
  //TODO HERE: Make sure you can show and hide some sort of progress 
  //           bar/progress wheel while the user is waiting for the list of likns to render
  $(document).on(/*do something here to fire an event/click handler - hint:http://api.jquery.com/category/events/ */);
})  
