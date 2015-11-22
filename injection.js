
 var player;

 window.onload = function(){ 
	document.getElementsByClassName("mark")[0].onclick = click;
	player  = document.getElementsByClassName('html5-video-player')[0];
}

function click (event){
		event.stopPropagation();
		player.seekTo(100, true);
	};