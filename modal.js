const modal = document.getElementById('modal');
const addSongBtn = document.getElementById('add-song-btn');
const closeModalBtn = document.getElementById('close-modal');
const createSongBtn = document.getElementById('create-song-btn');


const songTitleInput = document.getElementById('song-title-input');
const artistNameInput = document.getElementById('artist-name-input');
const songFileInput = document.getElementById('song-file-input');
const coverFileInput = document.getElementById('cover-file-input');


addSongBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});


closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


function addSong() {
    const title = songTitleInput.value.trim();
    const artist = artistNameInput.value.trim();
    const songFile = songFileInput.files[0];
    const coverFile = coverFileInput.files[0];

    // Валидация
    if (!title || !artist || !songFile || !coverFile) {
        alert('Пожалуйста, заполните все поля и выберите файлы.');
        return;
    }

  
    const newSong = {
        title,
        artist,
        src: URL.createObjectURL(songFile),
        cover: URL.createObjectURL(coverFile)
    };

    
    songs.push(newSong);
    localStorage.setItem('songs', JSON.stringify(songs));

    
    generateSong(newSong, songs.length - 1);

    
    modal.style.display = 'none';
    songTitleInput.value = '';
    artistNameInput.value = '';
    songFileInput.value = '';
    coverFileInput.value = '';
}


createSongBtn.addEventListener('click', addSong);
