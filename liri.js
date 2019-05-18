var axios = require("axios");
var fs=require("fs");
var Spotify = require('node-spotify-api');

require("dotenv").config();
var keys = require("./key.js");
var moment = require('moment');
var userInput=process.argv.splice(3).join(" ");

//  var spotify = new Spotify(keys.spotify);


if (process.argv[2] === "spotify-this-song" ) {

    if(userInput==="undefined"){
      var spotify = new Spotify({
        id: process.env.SPOTIFY_ID,
        secret: process.env.SPOTIFY_SECRET
      });
    
    
    spotify
    .search({ type: 'track', query: "The Sign"&&"Ace of base" })
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
  else{
    var spotify = new Spotify({
      id: process.env.SPOTIFY_ID,
      secret: process.env.SPOTIFY_SECRET
    });
  
  
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
}

if (process.argv[2] === "movie-this") {

  if(userInput!= "undefined"){
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
  else{

  // var movie = process.argv.splice(3).join(" ");
  console.log("If you haven't watched 'Mr. Nobody', then you should: http://www.imdb.com/title/tt0485947/");
  console.log("It's on Netflix!");

}
}

if(process.argv[2] === "concert-this"){

// var band=process.argv.splice(3).join(" ");
  axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(
    function (response) {
      // var result=response.data;
      for(i=0;i<response.data.length;i++){
    console.log("At "+response.data[i].venue.name+","+response.data[i].venue.country+" on "+moment(response.data[i].datetime).format('MM/DD/YYYY'));
      }
    })
  
  // else{
  //   console.log("If you haven't watched 'Mr. Nobody', then you should: http://www.imdb.com/title/tt0485947/");
  //   console.log("It's on Netflix!");
  // }
  }

  // This block of code will read from the "movies.txt" file.
  // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
  // The code will store the contents of the reading inside the variable "data"
  // fs.readFile("random.txt", "utf8", function(error, data) {
  
  //   // If the code experiences any errors it will log the error to the console.
  //   if (error) {
  //     return console.log(error);
  //   }
  
  //   // We will then print the contents of data
  //   console.log(data);
  
  //   // Then split it by commas (to make it more readable)
  //   var dataArr = data.split(",");
  
  //   // We will then re-display the content as an array for later use.
  //   console.log(dataArr);
  
  // });
  