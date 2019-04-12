
var inquirer = require('inquirer');
var spotify = require("./API/spotify");
var movie = require("./API/omdb");
var concert = require("./API/bandsintown");


inquirer.prompt([
    {
        type: "list",
        name: "choice",
        message: "G'Day Mate! What would you like information on?",
        choices: ["Concerts", "Movies", "Songs"]
    },

]).then(function (user) {

    switch (user.choice) {
        case "Concerts":
            // calls the function to get concert info
            concert.concertInfo();
            break;
            case "Movies":
            // calls the movie info function 
            movie.movieInfo();
            break;
        case "Songs":
            //calls the songInfo function
            spotify.songInfo();
            break;
        default:
            console.log("Please select one of the options")
            break;
    }

})