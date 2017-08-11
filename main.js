
// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

//=============== ELEMENTS =======================//
const results = document.querySelector('.results');
const searchForm = document.querySelectorAll('form')[0];
const baseUrl = 'https://itunes.apple.com/';
// let tempSearch = 'jack johnson';
// let tempResults = [];
const loopArray = [];
//=============== FETCH DATA fn =======================//
function search_iTunes (item) {
 return fetch(`${baseUrl}search?term=${item}`)
   .then(function(response) {
     return response.json();
     loopArray = results.results;
     return loopArray;
 })
}
console.log("search_iTunes ==> " + search_iTunes());
console.log("CL for const loopArray ==> " + loopArray);
//=============== CREATE 1 SONG fn =======================//
function make1songHTML (song) {
  return `
  <section class="song">
    <a href="${results.previewUrl}">
      <img src="${results.artworkUrl100}" alt="${results.artistName}Picture">
      <h5>${results.collectionName}</h5>
      <h4>${results.artistName}</h4>
    </a>
  </section>
  `
}

//=============== LOOP CREATE SONGS fn =======================//
function makeSongsHTML (songs) {
    let html = '';
    for (let i in loopArray) {
      html += make1songHTML(song);
    }
  return html;
}
console.log("makeSongsHTML ==> " + makeSongsHTML());
//=============== LOOP CREATE SONGS fn =======================//
function addSongsToDom (songsData) {
  results.innerHTML = makeSongsHTML(songsData);
}

//=============== SUBMIT EVENT CALL fn's CREATE PAGE  =======================//
searchForm.onsubmit = function (event) {
  event.preventDefault();

  const searchWords = event.target.querySelector('input[name="searchTerm"]').value
    console.log("const searchWords in final call ==> " + searchWords);

  search_iTunes(searchWords).then(function(results){
    addSongsToDom(results);
  })

}; //end onsumbit fn






// ---------------- fin ---------------------//
