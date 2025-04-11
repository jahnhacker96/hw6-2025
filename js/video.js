var video;
const volumeSlider = document.querySelector("#slider");
const volumeDisplay = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=this.document.querySelector("#player1")
	video.autoplay=false;
	video.loop=false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted==false){
  	video.muted = true;
	console.log("Mute Video");
	}
	else{
	video.muted = false;
	console.log("Unmute Video");
    }
// Used Stackoverflow for code:https://stackoverflow.com/questions/33060291/video-mute-unmute-button-javascript
});

volumeSlider.addEventListener("input", function () {
	const currentVolume = this.value / 100;
	video.volume = currentVolume;
	volumeDisplay.textContent = this.value + "%";
	console.log(`The current value is ${this.value/100}`);
// Used this website for reference:https://www.showwcase.com/article/34002/volumechange
  });

  document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Video");
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Video");
	video.classList.remove('oldSchool');
});

// document.querySelector("#slower").addEventListener("click", function() {
// 	console.log("Slow Down Video");
// 	video.
// });

// document.querySelector("#faster").addEventListener("click", function() {
// 	console.log("Speed Up Video");
// });

// document.querySelector("#skip").addEventListener("click", function() {
// 	console.log("Skip Ahead Video");
// });





