let songs = ["Song1.mp3", "Song2.mp3", "Song3.mp3"];
let poster = ["01.jpg", "02.jpg", "03.jpg"];

const songTitle = document.getElementById('songTitle');
const fillBar = document.getElementById('fill');

const song = new Audio();
const currentSong = 0;

window.onload = playSong;

function playSong(){
    song.src = songs[currentSong];
    songTitle.textContent = songs[currentSong]
    song.play()
}

function playOrPauseSong(){
    if(song.paused){
        song.play();
        $("#play img").attr("src", "pause.png")
    }
    else {
        song.pause();
        $("#play img").attr("src", "play.png")
    }
}
function next(){
            
    currentSong++
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}

function pre(){
            
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    $("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}

song.addEventListener('timeupdate',function(){
    let position = song.currentTime / song.duration;
    fillBar.style.width = position * 100 + '%';
})


