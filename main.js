

// Get injection.js and append it to document
function runInjection (){
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('injection.js');
    s.onload = function() {
        this.parentNode.removeChild(this);
    };
    (document.head || document.documentElement).appendChild(s);
}



// Get comments
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}
// window.onload = function(){ 
// 	document.getElementsByClassName("mark")[0].onclick = click;
// 	player  = document.getElementsByClassName('html5-video-player')[0];
// }
	
	
function showMarks(){
    
    getYTComments(getURLParameter('v'),function(data){
        // alert(data);
        $('.mark').remove();
        $.each(data, function(index,value){
            
                // Find the container and append the mark
                var progress= $('.ytp-progress-bar-container');
                console.log(progress);
                var mark = $("<div class='mark'>\
                                <div class='title'>"+ value.text +"</div>\
                                <div class='button' data-time='"+value.time+"' ></div>\
                            <div>");
                progress.append(mark);
                if (value.position <= 50){
                    mark.css('left', value.position+'%');
                }
                else{
                    mark.css('right', (100- value.position)+'%');
                    mark.addClass('right');
                }
        });
        
        runInjection();
    });
}

	





// Disable hiding menu for testing purpose
// function moveItem() {
//  	$(".html5-video-player").removeClass("ytp-autohide");
// }
// setInterval(moveItem,100);


var oldLocation = "";
setInterval(function() {
    if(window.location.href != oldLocation) {
        console.log('change');
         oldLocation = window.location.href;
         showMarks();
    }
}, 1000); // check every second
