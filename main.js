

// Get injection.js and append it to document
var s = document.createElement('script');
s.src = chrome.extension.getURL('injection.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);
     

// Find the container and append the mark
var progress= $('.ytp-progress-bar-container');
console.log(progress);
var mark = $("<div class='mark'  >\
				<div class='title'>test</div>\
				<div class='button'></div>\
			<div>");
progress.append(mark);

 
 
 
// Disable hiding menu for testing purpose
function moveItem() {
 	$(".html5-video-player").removeClass("ytp-autohide");
}
setInterval(moveItem,100);