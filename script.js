console.log("SPV")

/* Dear Reader, While making this project i was having very very less knowledge about JavaScript.
 So I copied this js from a YouTube video but even after trying very hard my seek-bar and shuffle button are not working.
 Sorry, but this is my best attempt before i learn JavaScript. 
 THANK YOU */

let play = document.querySelector('#masterPlay');
let next = document.querySelector('#next');
let previous = document.querySelector('#previous');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let track_image = document.querySelector('#track_image');
let masterPlay = document.getElementById('masterPlay');
let artist = document.querySelector('#artist');
let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

let track = document.createElement('audio');

let All_song = [
   {
     name: "Forever-Lost Sky",
     path: "music/Forever.mp3",
     img: "img/Forever.jpg",
     singer: "1"
   },
   {
     name: "We Rollin-Shubh",
     path: "music/We Rollin.mp3",
     img: "img/We Rollin.jpg",
     singer: "2"
   },
   {
     name: "Welcome to Los Santos-GTA 5 OST",
     path: "music/WTLS.mp3",
     img: "img/WTLS.jpg",
     singer: "3"
   },
   {
     name: "Look At Me Now by BS",
     path: "music/Look At Me.mp3",
     img: "img/Look At Me.jpg",
     singer: "4"
   },
   {
     name: "Beast(Southpaw remix)(instrumental)-The Hustle Stander",
     path: "music/Beast.mp3",
     img: "img/Beast.jpg",
     singer: "5"
   },
   {
     name: "Hidding in the Blues-Chapter1 by TheFatRat",
     path: "music/HITB.mp3",
     img: "img/HITB.jpg",
     singer: "6"
   }
]

function load_track(index_no){
	clearInterval(timer);
	track.src = All_song[index_no].path;
	masterSongName.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    track.load();
}

load_track(index_no);

function mute_sound(){
	track.volume = 0;
	volume.value = 0;
}

 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }

function playsong(){
  track.play();
  Playing_song = true;
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
}

function pausesong(){
	track.pause();
	Playing_song = false;
	masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
}

function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}

function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}

function volume_change(){
	track.volume = recent_volume.value / 15;
}

function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}




