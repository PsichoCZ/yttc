

var progress= $('.ytp-progress-list');
console.log(progress);
var mark = $("<a class='mark' href='http://www.youtube.com/watch?v=RVr0lbKZg5Q&t=45m05s'\
					  class='yt-uix-sessionlink'  data-sessionlink='ei=oQ5RVpWiG4aiWuf0mtgM' >\
				<div class='title'>test</div>\
				<div class='button'></div>\
			<a>");
progress.append(mark);
 
 
 
function moveItem() {
 	$(".html5-video-player").removeClass("ytp-autohide");
}
setInterval(moveItem,100);