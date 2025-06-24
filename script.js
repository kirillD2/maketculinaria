'use strict';

const audio = document.getElementById('audio');
const albumCover = document.getElementById('album-cover');
const progress = document.getElementById('progress');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const volumeSlider = document.getElementById('volume');

let songs = [];

const songTitleElement = document.getElementById('song-title');
const artistNameElement = document.getElementById('artist-name');

audio.addEventListener('error', function(e) {
    console.error("Ошибка при загрузке аудиофайла:", e);
});

let isPlaying = false;
let currentSongIndex = 0;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;

    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60);
    currentTimeElement.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60);
    if (!isNaN(durationSeconds)) {
        durationElement.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
    }
});

progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 100;
});

audio.addEventListener('ended', () => {
    playPauseBtn.textContent = 'Play';
    isPlaying = false;
    nextBtn.click();
});

function loadSong(index) {
    currentSongIndex = index;
    audio.src = songs[index].src;
    albumCover.src = songs[index].cover;
    
    songTitleElement.textContent = songs[index].title;
    artistNameElement.textContent = songs[index].artist;

    audio.load();
    audio.play();
    playPauseBtn.textContent = 'Pause';
    isPlaying = true;
}

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

const songsWrapper = document.querySelector('.song-list');

const generateSong = (song, index) => {
    const div = document.createElement('div');
    div.classList.add('song-card');

    const img = document.createElement('img');
    img.src = song.cover;
    img.classList.add('album-cover');

    const p = document.createElement('p');
    p.classList.add('song-title');
    p.textContent = song.title;

    div.appendChild(img);
    div.appendChild(p);
    songsWrapper.appendChild(div);

    // Добавляем обработчик клика для воспроизведения песни
    div.addEventListener('click', () => {
        loadSong(index);
    });
};

// Загрузка песен из LocalStorage или JSON
window.addEventListener('load', () => {
    const storedSongs = localStorage.getItem('songs');
    if (storedSongs) {
        songs.push(...JSON.parse(storedSongs));
        songs.forEach((song, index) => generateSong(song, index));
    } else {
        fetch('songs.json')
            .then(response => response.json())
            .then(data => {
                songs.push(...data);
                songs.forEach((song, index) => generateSong(song, index));
                localStorage.setItem('songs', JSON.stringify(songs));
            })
    }
});
