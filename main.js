/*
  Here is a rough idea for the steps you could take:
*/

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


}; //end onsumbit fn

//=============== #3 FETCH DATA =======================//
let search_iTunes = function(inputWords) {
 return fetch(`${baseUrl}search?term=jack+johnson`)
   .then(function(response) {
     return response.json();
       // console.log(data);
 })
}
console.log(search_iTunes());

//=============== #4 APPEND RESULTS =======================//




// ---------------- fin ---------------------//
