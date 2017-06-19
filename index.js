function tweet(message) {
window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text='   + encodeURIComponent(message));
}

var msg;
function tweetHandler() {
tweet($(msg).text()); 

}



$(document).ready(function() {

    $("#generate").on("click", function(){
      
      $.ajaxSetup ({cache:false});
      
      $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(json) {
        msg = json[0].content + " - " + json[0].title;
        $(".message").html(msg);
      });
    });
$('#tweetButton').on('click', tweetHandler);
  
  });