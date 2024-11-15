document.getElementById('addMusicBtn').addEventListener('click', function() {
    const musicInput = document.getElementById('musicInput');
    const musicList = document.getElementById('musicList');

    if (musicInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = musicInput.value;
        musicList.appendChild(li);
        musicInput.value = ''; 
    } else {
        alert('Please enter a song name.');
    }
});
