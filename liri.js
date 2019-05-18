var axios = require("axios");
var fs=require("fs");
var Spotify = require('node-spotify-api');


require("dotenv").config();
var keys = require("./key.js");
var moment = require('moment');
var userInput=process.argv.splice(3).join(" ");

function spotifyThisSong(choice){
    var spotify = new Spotify({
        id: process.env.SPOTIFY_ID,
        secret: process.env.SPOTIFY_SECRET
      });
    spotify
    .search({ type: 'track', query: choice})
    .then(function (response) {
      console.log("Song name:"+response.tracks.items[0].name);
      console.log("Album name:" +response.tracks.items[0].album.name);
      console.log("Artists:"+response.tracks.items[0].artists[0].name);
      console.log("Preview URL:"+response.tracks.items[0].preview_url);
      data="Song name:"+response.tracks.items[0].name+","+"Album name:"+response.tracks.items[0].album.name+","+"Artists:"+response.tracks.items[0].artists[0].name+","+"Preview URL:"+response.tracks.items[0].preview_url;
      appendOutputFile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
 
};
function appendOutputFile(data){
    fs.appendFile('output.txt',data+"\n",'utf8', function (err) {
        if (err) throw err;
      });
      
}

if(process.argv[2]==="spotify-this-song"){
  if(userInput){
    spotifyThisSong(userInput);
}
else{
spotifyThisSong( "The Sign"&&"Ace of base");
}

  }  
if(process.argv[2]==="do-what-it-says"){
      fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
                return console.log(error);
        }
              spotifyThisSong(data);
            

})
}


if (process.argv[2] === "movie-this") {

  if(userInput){
    axios.get("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=3317766c").then(
      function (response) {
        // console.log(response.data);
        console.log("Title: " + response.data.Title);
        console.log("Rating: " + response.data.imdbRating);
        console.log("Release year : " + response.data.Year);
        console.log("Country (movie production): " + response.data.Country);
        console.log("Plot: " + response.data.Plot);
        console.log("Cast: " + response.data.Actors);
        data="Title:"+response.data.Title+","+"Rating:"+response.data.imdbRating+","+"Release year :"+response.data.Year+","+"Country (movie production):"+response.data.Country+","+"Plot:"+response.data.Plot+","+"Cast:"+response.data.Actors;
    
        appendOutputFile(data);
      }
    );
  
  
  }
  else{
  console.log("If you haven't watched 'Mr. Nobody', then you should: http://www.imdb.com/title/tt0485947/");
  console.log("It's on Netflix!");
  appendOutputFile("If you haven't watched 'Mr. Nobody', then you should: http://www.imdb.com/title/tt0485947/"+"\n"+"It's on Netflix!");
      

}
}
function bandsinTown(band){
  axios.get("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(
    function (response) {
      // var result=response.data;
      console.log("The upcoming concerts performed by "+ band);
      for(i=0;i<response.data.length;i++){
    var data="At "+response.data[i].venue.name+","+response.data[i].venue.city+","+response.data[i].venue.country+" on "+moment(response.data[i].datetime).format('MM/DD/YYYY');
    console.log(data);
    appendOutputFile(data);
      }
    })

}
if(process.argv[2] === "concert-this"){

  if(userInput){
bandsinTown(userInput);
  }
  else{
bandsinTown("Imagine Dragons");
  }
}  
