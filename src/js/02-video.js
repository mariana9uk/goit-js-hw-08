
import Vimeo from '@vimeo/player'
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
})

player.on('timeupdate', function(data) {
    const current = data.seconds;
    console.log(current);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(current));
})

window.addEventListener('load', function(e) {
    e.preventDefault()});
    const savedTime = localStorage.getItem("videoplayer-current-time");
     const parsedSavedTime = JSON.parse(savedTime);
player.setCurrentTime(parsedSavedTime);
_.trottle()