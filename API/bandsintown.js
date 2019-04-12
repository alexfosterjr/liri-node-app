var inquirer = require("inquirer");
var axios = require("axios");
var moment = require("moment");

function concertInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "artist",
            message: "Who would you like to look up concert information for?"
        },
    ]).then(function (user) {
        var queryUrl = "https://rest.bandsintown.com/artists/" + user.artist + "/events?app_id=codingbootcamp";

        axios.get(queryUrl).then(
            function (response) {
                if (response.data.length) {
                    for (i = 0; i < response.data.length; i++) {
                        console.log("******************************************")
                        console.log(`Artist(s): ${response.data[i].lineup.join(", ")}`);
                        console.log(`Venue: ${response.data[i].venue.name}`);
                        console.log(`Location: ${response.data[i].venue.city}, ${response.data[i].venue.region}, ${response.data[i].venue.country}`);
                        console.log("Date Of Concert: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                        console.log("******************************************");
                        console.log("");
                    }
                }
                else {
                    console.log("Maybe the band broke up cause they have no concerts coming up");
                }


            })
    })
}

module.exports = {
    concertInfo: concertInfo,
}