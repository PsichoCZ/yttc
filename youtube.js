function getYTComments(videoID, callback){

  var videoURL = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=' + videoID + '&key=AIzaSyDKOmEoe8tm50XoIFSD6r9TQCoJCOlWPx0'
  var duration = 0;
  $.getJSON(videoURL, function(data){
    if(data && data.items){
      duration = moment.duration(data.items[0].contentDetails.duration).asSeconds();
    }
  }).done(function(){
    var commentsURL = 'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=' + videoID + '&key=AIzaSyDKOmEoe8tm50XoIFSD6r9TQCoJCOlWPx0'
    var comments = [];
    $.getJSON(commentsURL, function(data) {
      var a_regex = /(.*)<a\s+(?:[^>]*?\s+)?href="([^"]*t=([^"]*))">([^<]*)<\/a>(.*)/;
      var time_regex = /(\d?\dh)?(\d?\dm)?(\d?\ds)/
      if(data && data.items){
        for(var i = 0; i < data.items.length; i++){
          var text = data.items[i].snippet.topLevelComment.snippet.textDisplay;
          var author = data.items[i].snippet.topLevelComment.snippet.authorDisplayName;
          var match = text.match(a_regex);
          if(match !== null){
            text = match[0].replace(/<(?:.|\n)*?>/gm, '');
            var time = match[3].match(time_regex);
            var seconds = parseInt(time[1] || 0) * 3600 + parseInt(time[2] || 0) * 60 + parseInt(time[3] || 0);
            var comment = {
              time: seconds,
              position: ( seconds / duration ) * 100,
              text: text,
              author: author
            }
            comments.push(comment);
          }
        }
      }
    }).done(function(){
      callback(comments);
    });
  });
}

$(function(){
  getYTComments("wtLJPvx7-ys", function(data){ console.log(data) });
});
