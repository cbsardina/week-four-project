//=============== ELEMENTS =======================//
const searchForm = document.querySelectorAll('form')[0];
const baseUrl = 'https://itunes.apple.com/';
let loopArray = [];
let searchWords = '';


//=============== FETCH DATA fn =======================//
function search_iTunes () {
  return fetch(`${baseUrl}search?term=${searchWords}`)
    .then(function(response) {
      return response.json();
    })
    .catch(function (err) {
          console.log(err)
    })
}

//=============== CREATE 1 SONG to HTML fn =======================//
function make1songHTML (artistArray) {
  return `
  <section class="song">
      <img src="${artistArray.artworkUrl100}" alt="${artistArray.artistName}Picture">
      <h5 class="trackName" >
      <button type="submit" data-songUrl="${artistArray.previewUrl}">${artistArray.trackName}</button>
      </h5>
      <h4>${artistArray.artistName}</h4>
  </section>
  `
}

//=============== LOOP CREATE SONGS fn from make1songHTML =======================//
function makeSongsHTML () {
    let html = '';
  for (let i in loopArray) {
      html += make1songHTML(loopArray[i]);
    }
  return html;
}

//=============== APPEND SONGS TO DOM fn =======================//
function addSongsToDom () {
  const artistResult = document.querySelector('.artistResult');
  artistResult.innerHTML = makeSongsHTML(loopArray);
}

//=============== SUBMIT EVENT CALL fn's CREATE PAGE  =======================//
searchForm.onsubmit = function () {
  event.preventDefault();

  searchWords = event.target.querySelector('input[name="searchTerm"]').value

  search_iTunes(searchWords).then(function(data){
    loopArray = data.results;
    addSongsToDom(loopArray);

//start event LISTENER 'click' -- onclick
const button = document.querySelectorAll('button[type="submit"]')

  for (let i in button) {
    button[i].onclick = function() {

      const audioControls = document.querySelector('audio.music-player')
      const songClip = button[i].getAttribute('data-songUrl')
      const transferClip = audioControls.setAttribute('src', songClip)

      const songTitle = document.querySelector('h2.songTitle')
      const songName = this.innerHTML
      songTitle.innerHTML = songName
    }
  } //end onclick fn

  })
}; //end onsumbit fn


// ---------------- fin ------------------
