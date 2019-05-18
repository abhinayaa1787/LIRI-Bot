# LIRI-Bot

## LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives back data.

### LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### LIRI will search for songs/movies/events if the following commands are entered 
* **concert-this** for searching events for a particular band/artist
* **spotify-this-song** for searching data about a song of users choice
* **movie-this** for searching data about a movie of users choice
* **do-what-it-says** for spotifying the "I Want it That Way"song 

#### If the user wants to search a song and  enters the following command in the terminal
```` node liri spotify-this-song````
##### The following will be the output
![Screenshot](/images/spotify_nosong.png)

#### If the user wants to search a song and enters the following command in the terminal
```` node liri spotify-this-song new rules````
##### The following will be the output
![Screenshot](/images/spotify_song.png)


#### If the user wants to search a movie and enters the following command in the terminal
```` node liri movie-this````
##### The following will be the output
![Screenshot](/images/movie_noname.png)

#### If the user wants to search a movie and enters the following command in the terminal
```` node liri movie-this the shawshank redemption````
##### The following will be the output
![Screenshot](/images/movie.png)

#### If the user  wants to know about the upcoming concerts about a band/artist and enters the following command in the terminal
```` node liri concert-this````
##### The following will be the output
![Screenshot](/images/concert_noname.png)

#### If the user wants to know about the upcoming concerts about a band/artist and  enters the following command in the terminal
```` node liri concert-this ed sheeran````
##### The following will be the output
![Screenshot](/images/concert_withname.png)

#### If the user enters the following command in the terminal
```` node liri do-what-it says````
##### The following will be the output
![Screenshot](/images/dowhatitsays.png)

#### All the ouput will be logged in to output.txt file
![Screenshot](/images/output.txt.png)
