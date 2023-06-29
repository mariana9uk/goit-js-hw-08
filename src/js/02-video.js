
import Vimeo from '@vimeo/player'
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
})