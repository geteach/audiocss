function change() {
	document.getElementById('playButton').style.cssText ='background-color:#2979ff;padding-top:1px;'
	document.getElementById('play').style.cssText = 'float:left;background-color:#2979ff;width:24px;padding-top:1px'
};
function changeBack() {
	document.getElementById('playButton').style.cssText = 'rgba(0, 32.2, 86.3);padding-top:1px;'
	document.getElementById('play').style.cssText = 'float:left;width:24px;rgba(0, 32.2, 86.37);padding-top:1px'
};		
function playPause() {
   var audio = document.getElementById("audioI")
   if (document.getElementById('playIcon').innerHTML  != "play_arrow"){
		document.getElementById('playIcon').innerHTML = 'play_arrow';
		document.getElementById('thisButton').style.cssText ='width:80px;'
		document.getElementById('playButton').innerHTML = 'Play';
		audio.pause();
		
						
	} else {
		document.getElementById('playIcon').innerHTML = 'pause';
		document.getElementById('thisButton').style.cssText ='width:85px;'
		document.getElementById('playButton').innerHTML = 'Pause';
		audio.play();
	}
	audio.onended = function() {
		document.getElementById('playIcon').innerHTML = 'play_arrow';
		document.getElementById('thisButton').style.cssText ='width:80px;'
		document.getElementById('playButton').innerHTML = 'Play';
		audio.pause();
	};			
};	