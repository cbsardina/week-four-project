
// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

//=============== #1 ELEMENTS =======================//
const results = document.querySelector('.results');
const searchForm = document.querySelectorAll('form')[0];
const baseUrl = 'https://itunes.apple.com/';

//=============== #2 SUBMIT EVENT =======================//
searchForm.onsubmit = function () {
  event.preventDefault();


}; //end onsumbit fn

//=============== #3 FETCH DATA =======================//
function search_iTunes () {
 return fetch(`${baseUrl}search?term=jack+johnson`)
   .then(function(response) {
     return response.json();
 })
}
console.log(search_iTunes());

//=============== #4 CREATE CARDS RESULTS =======================//
function makeArtistHTML (artist) {
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


// ---------------- fin ---------------------//
