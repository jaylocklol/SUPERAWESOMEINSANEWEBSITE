// JavaScript to simulate dynamically loading MP3 files and search functionality
const musicList = document.getElementById('musicList');
const searchBar = document.getElementById('searchBar');

// Simulate fetching MP3 files from the server
const songs = [
    "Small Affairs - My Time.mp3"
];

// Function to display the list of songs
function displaySongs(filter = '') {
    // Clear existing list
    musicList.innerHTML = '';
    
    // Filter and display songs
    const filteredSongs = songs.filter(song => song.toLowerCase().includes(filter.toLowerCase()));
    filteredSongs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.className = 'song';
        
        // Create a link for downloading the song
        const songLink = document.createElement('a');
        songLink.href = `music/${song}`;
        songLink.download = song;
        songLink.textContent = song;

        songElement.appendChild(songLink);
        musicList.appendChild(songElement);
    });
}

// Initialize display
displaySongs();

// Add event listener to search bar
searchBar.addEventListener('input', (e) => {
    displaySongs(e.target.value);
});
