
import Vimeo from '@vimeo/player'
import _ from 'lodash';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
})

const savePlaybackTime = _.throttle(function(time) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
  }, 1000);

player.on('timeupdate', function(data) {
    const current = data.seconds;
    console.log(current);
    savePlaybackTime(current);
})

window.addEventListener('load', function(e) {
    e.preventDefault()});
    const savedTime = localStorage.getItem("videoplayer-current-time");
     const parsedSavedTime = JSON.parse(savedTime);
player.setCurrentTime(parsedSavedTime);
