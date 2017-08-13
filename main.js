
// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

//=============== ELEMENTS =======================//

const searchForm = document.querySelectorAll('form')[0];
const baseUrl = 'https://itunes.apple.com/';
// let tempSearch = 'jack johnson';
// let tempResults = [];
let loopArray = [];
let searchWords = '';
// const band = 'metallica';
//=============== FETCH DATA fn =======================//



let search_iTunes = function () {
  return fetch(`${baseUrl}search?term=${searchWords}`)
    .then(function(response) {
      return response.json();
    })
    .catch(function (err) {
          console.log(err)
    })
}

// console.log(search_iTunes());
// console.log("CL for const loopArray ==> " + loopArray);
//=============== CREATE 1 SONG fn =======================//
let make1songHTML = function (song) {
  return `
  <section class="song">
    <a href="${song.previewUrl}">
      <img src="${song.artworkUrl100}" alt="${song.artistName}Picture">
      <h5>${song.collectionName}</h5>
      <h4>${song.artistName}</h4>
    </a>
  </section>
  `
}
//=============== LOOP CREATE SONGS fn =======================//
let makeSongsHTML = function (songs) {
    let html = '';
  for (let i in loopArray) {
      html += make1songHTML(song);
    }
  return html;
}

//=============== LOOP CREATE SONGS fn =======================//
let addSongsToDom = function  (songsData) {
  const artistResult = document.querySelector('.artistResult');
  artistResult.innerHTML = makeSongsHTML(songsData);
}

//=============== SUBMIT EVENT CALL fn's CREATE PAGE  =======================//
searchForm.onsubmit = function () {
  event.preventDefault();

  searchWords = event.target.querySelector('input[name="searchTerm"]').value
    console.log("const searchWords in final call ==> " + searchWords);
    console.log(search_iTunes(searchWords));


  search_iTunes(searchWords).then(function(results){
    // addSongsToDom(results);
    console.log("results.results below: ");
    console.log(results.results);
    loopArray = results.results;
    console.log(loopArray[0].artistName);
  })


}; //end onsumbit fn





// ---------------- fin ---------------------//
