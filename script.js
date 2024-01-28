console.log("Pogi ng nag gawa :) ");

//audio

var audioOpen = document.getElementById("audio-openingTag").value;
var sourceAudio = document.getElementById("source-audio").value;
var audioClose = document.getElementById("audio-closingTag").value;

function audio(){
	if (audioOpen == "<audio controls=controls>"){
		document.getElementById("audio-openingTag").value = "correct!";
	}

	else if (audioOpen !== "<audio controls=controls>"){
		document.getElementById("audio-openingTag").value = "incorrect!";
	}

	if (sourceAudio == "<source src=audio.mp3 type=audio/mpeg>"){
		document.getElementById("source-audio").value = "correct!";
	}

	else if (sourceAudio !== "<source src=audio.mp3 type=audio/mpeg>"){
		document.getElementById("source-audio").value = "incorrect!";
	} 

	if (audioClose == "</audio>"){
		document.getElementById("audio-closingTag").value = "correct!";
	}
	else if (audioClose !== "</audio>"){
		document.getElementById("audio-closingTag").value = "incorrect!";
	}
	
}

//video

var videoOpen = document.getElementById("video-openingTag").value;
var sourceVideo = document.getElementById("source-video").value;
var videoClose = document.getElementById("video-closingTag").value;

function video(){
	if (videoOpen == "<video controls=controls>"){
		document.getElementById("video-openingTag").value = "correct!";
	}

	else if (videoOpen !== "<video controls=controls>"){
		document.getElementById("video-openingTag").value = "incorrect!";
	}

	if (sourceVideo == "<source src=video.mp4 type=video/mp4>"){
		document.getElementById("source-video").value = "correct!";
	}

	else if (sourceVideo !== "<source src=video.mp4 type=video/mp4>"){
		document.getElementById("source-video").value = "incorrect!";
	}

	if (videoClose == "</video>"){
		document.getElementById("video-closingTag").value = "correct!";
	}

	else if (videoClose !== "</video>"){
		document.getElementById("video-closingTag").value = "incorrect!";
	}
	
}