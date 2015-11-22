$(function(){
  var videoID = 'wtLJPvx7-ys';


  var videoURL = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=' + videoID + '&key=AIzaSyDKOmEoe8tm50XoIFSD6r9TQCoJCOlWPx0'
  $.getJSON(videoURL, function(data) {
    if(data && data.items){
      console.log(data.items[0].contentDetails.duration);
    }
  });


  var commentsURL = 'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=' + videoID + '&key=AIzaSyDKOmEoe8tm50XoIFSD6r9TQCoJCOlWPx0'
  var comments = [];
  $.getJSON(commentsURL, function(data) {
    if(data && data.items){
      for(var i = 0; i < data.items.length; i++){
        var text = data.items[i].snippet.topLevelComment.snippet.textDisplay;
        if(text)
        console.log(data.items[i].snippet.topLevelComment.snippet.textDisplay);
      }
    }
  });
});
