
 var player;

//  window.onload = function(){ 
	// document.getElementsByClassName("mark")[0].onclick = click;
	var marks = document.getElementsByClassName("mark"); 
	for	(var i = 0; i < marks.length; i++) {
		marks[i].onclick = click;
	}
	player  = document.getElementsByClassName('html5-video-player')[0];
	
// }


function click (event){
		event.stopPropagation();
		var time = event.target.dataset.time;
		player.seekTo(time, true);
	};


