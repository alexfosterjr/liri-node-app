var inquirer = require("inquirer");
var axios = require("axios");

function movieInfo() {
    inquirer.prompt([{
        type: "input",
        name: "movie",
        message: "Please type the name of a movie you would like information on"
    }, ]).then(function (user) {
        queryUrl = "http://www.omdbapi.com/?t=" + user.movie + "&y=&plot=short&apikey=trilogy";
        axios.get(queryUrl).then(
            function (response) {
                if (response.data.Title != undefined) {

                    console.log("******************************************");

                    console.log("Movie Title: " + response.data.Title);
                    console.log("Length: " + response.data.Runtime);
                    console.log("Release Year: " + response.data.Year);
                    console.log("Imdb Rating: " + response.data.imdbRating);
                    console.log("Rated: " + response.data.Rated);
                    console.log("Country: " + response.data.Country);
                    console.log("Language: " + response.data.Language);
                    console.log("Plot: " + response.data.Plot);
                    console.log("Stars of the Movie: " + response.data.Actors);
                    console.log("******************************************");

                } else {
                    console.log("Are you sure thats a real movie?? maybe try again...");
                }

            })
    })
}

module.exports = {
    movieInfo: movieInfo,
}