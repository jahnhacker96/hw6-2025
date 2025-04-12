var video;

// Loads video
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=this.document.querySelector("#player1")
	video.autoplay=false;
	video.loop=false;
// code from lecture
});

// Plays video when Play button is clicked
document.querySelector("#play").addEventListener("click", function() {
	// Displays video volume when Play button is clicked
	document.querySelector("#volume").textContent = (video.volume * 100) + "%";
	console.log("Play Video")
	video.play();
	// code from lecture
});

// Pauses video when Pause is clicked
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	// code from w3 schools:https://www.w3schools.com/tags/av_met_pause.asp
});

// Slows down video when Slow Down button is clicked
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.90;
	console.log("Speed is" + video.playbackRate);
	// referenced code from w3 schools:https://www.w3schools.com/tags/av_prop_playbackrate.asp
});

// Speeds up video when Speeds Up button is clicked
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.90;
	console.log("Speed is" + video.playbackRate);
	// referenced code from w3 schools:https://www.w3schools.com/tags/av_prop_playbackrate.asp
});

// Skips ahead video when Skip Ahead button is clicked
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	  }
	  else{
	  video.currentTime += 10;
	  }
	console.log("Video current time is" + video.currentTime);
	// referenced code from w3schools:https://www.w3schools.com/tags/av_prop_currenttime.asp
});

// Mutes/unmute video when Mute button is clicked
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted==true){
  	video.muted = false;
	document.querySelector("#mute").innerHTML = "Mute";
	}
	else{
	video.muted = true;
	document.querySelector("#mute").innerHTML = "Unmute";
    }
// Used Stackoverflow for code:https://stackoverflow.com/questions/33060291/video-mute-unmute-button-javascript
});

// Changes the volume when utilizing the volume slider
document.querySelector("#slider").addEventListener("input", function () {
	console.log("Volume change")
	video.volume = this.value/100;
	document.querySelector("#volume").textContent = (video.volume * 100) + "%";
// referenced code from w3schools: https://www.w3schools.com/tags/ref_av_dom.asp
  });

// Changes the video into old school style
  document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Video");
	video.classList.add('oldSchool');
	// referenced code from w3schools:https://www.w3schools.com/jsref/prop_element_classlist.asp
});

// Removes the old school style from the video
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Video");
	video.classList.remove('oldSchool');
	// referenced code from w3schools:https://www.w3schools.com/jsref/prop_element_classlist.asp
});






