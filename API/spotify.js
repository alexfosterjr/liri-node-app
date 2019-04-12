require('dotenv').config();
var Spotify = require("node-spotify-api");
var keys = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
}
var inquirer = require("inquirer");
var spotify = new Spotify(keys);


function songInfo() {

    inquirer.prompt([{
            type: "input",
            name: "songName",
            message: "Please type the name of a song"
        }, ]).then(function (user) {

            spotify.search({
                    type: 'track',
                    query: user.songName
                })
                .then(function (response) {

                    console.log("******************************************")
                    console.log(`Song: ${response.tracks.items[0].name}`)
                    console.log(`Artist(s): ${response.tracks.items[0].artists[0].name}`)
                    console.log(`From The Album: ${response.tracks.items[0].album.name}`)
                    console.log(`Preview: ${response.tracks.items[0].preview_url}`)
                    console.log("******************************************")


                })
        })
        .catch(function (err) {
            console.log(err);
        });
}
module.exports = {
    songInfo: songInfo,
}