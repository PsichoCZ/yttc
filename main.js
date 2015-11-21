

var progress= $('.ytp-progress-list');
console.log(progress);
var mark = $("<div class='mark'>test</div>");
progress.append(mark);
 
 
 
function moveItem() {
 	$(".html5-video-player").removeClass("ytp-autohide");
}
setInterval(moveItem,100);