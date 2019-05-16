var axios = require("axios");
require("dotenv").config();
var keys = require("./key.js");
var moment = require('moment');
var userInput=process.argv.splice(3).join(" ");

//  var spotify = new Spotify(keys.spotify);


var Spotify = require('node-spotify-api');
if (process.argv[2] === "spotify-this-song") {
  var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });
  // var song = process.argv.splice(3).join(" ");


  spotify
    .search({ type: 'track', query: userInput })
    .then(function (response) {
      console.log(response.tracks.items[0].name);
      console.log(response.tracks.items[0].artists[0].name);
      console.log(response.tracks.items[0].album.name);


      console.log(response.tracks.items[0].preview_url);

    })
    .catch(function (err) {
      console.log(err);
    });

}

if (process.argv[2] === "movie-this") {
  // var movie = process.argv.splice(3).join(" ");
  axios.get("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=3317766c").then(
    function (response) {
      // console.log(response.data);
      console.log("The movie's rating is: " + response.data.imdbRating);
      console.log("The movie's title is: " + response.data.Title);
      console.log("The movie's release year is: " + response.data.Year);
      console.log("The movie's released in: " + response.data.Country);
      console.log("The movie's plot is: " + response.data.Plot);
      console.log("The movie's cast is: " + response.data.Actors);
    }
  );
}

if(process.argv[2] === "concert-this"){
// var band=process.argv.splice(3).join(" ");
  axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(
    function (response) {
      // var result=response.data;
      for(i=0;i<response.data.length;i++){
    console.log(response.data[i].venue.name+","+response.data[i].venue.country+" on "+moment(response.data[i].datetime).format('MM/DD/YYYY'));


      }

    })
  }
