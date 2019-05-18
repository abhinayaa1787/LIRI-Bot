# LIRI-Bot

## LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives back data.

### LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### LIRI will search for songs/movies/events if the following commands are entered 
* **concert-this** for searching events for a particular band/artist
* **spotify-this-song** for searching data about a song of users choice
* **movie-this** for searching data about a movie of users choice
* **do-what-it-says** for spotifying the "I Want it That Way"song 

### Node packages installed in this 
* Axios
* Moment
* Dotenv
* node-spotify-api

### APIs used are 
* OMDB
* BandsinTown

Before running the liri.js use terminal to install the above mentioned packages using the command ```` npm i ````


#### If the user wants to search a song and  enters the following command in the terminal
```` node liri spotify-this-song````
###### When this command runs, the node-spotify-api package runs behind this to fetch data corresponding to the user query
##### The following will be the output
![Screenshot](/images/spotify_nosong.png)

#### If the user wants to search a song and enters the following command in the terminal
```` node liri spotify-this-song new rules````
###### When this command runs, the node-spotify-api package runs behind this to fetch data corresponding to the user query

##### The following will be the output
![Screenshot](/images/spotify_song.png)


#### If the user wants to search a movie and enters the following command in the terminal
```` node liri movie-this````
###### When this command runs, the axios package helps to send a request to OMDB and fetches data corresponding to the user query

##### The following will be the output
![Screenshot](/images/movie_noname.png)

#### If the user wants to search a movie and enters the following command in the terminal
```` node liri movie-this the shawshank redemption````
###### When this command runs, the axios package helps to send a request to OMDB and fetches data corresponding to the user query

##### The following will be the output
![Screenshot](/images/movie.png)

#### If the user  wants to know about the upcoming concerts about a band/artist and enters the following command in the terminal
```` node liri concert-this````
###### When this command runs, the axios package makes a call to the bandsintown API and fetches data corresponding to the user query

##### The following will be the output
![Screenshot](/images/concert_noname.png)

#### If the user wants to know about the upcoming concerts about a band/artist and  enters the following command in the terminal
 `RGB[A](R, G, B[, A])` ````  node liri concert-this ed sheeran````
###### When this command runs, the axios package makes a call to the bandsintown API and fetches data corresponding to the user query

##### The following will be the output
![Screenshot](/images/concert_withname.png)

#### If the user enters the following command in the terminal
```` node liri do-what-it says````
###### When the command runs, fs module runs to interact with a file system. There is a file that has as an input for the node-spotify-api module.The text in the file random.txt is read and the data relevant to the song in txt file is displayed

##### The following will be the output
![Screenshot](/images/dowhatitsays.png)

#### All the ouput will be logged in to output.txt file
    fs.appendFile() will append all the output to "output.txt" file dynamically
![Screenshot](/images/output.txt.png)
