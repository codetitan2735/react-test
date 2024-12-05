const teams = require("./teams.json");
const tournaments = require("./tournaments.json");

const series = [
    {
        id: 1, 
        title: "CSGO",
        tournament: tournaments.shift(),
        startTime: "14:00",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 2, 
        title: "CSGO",
        tournament: tournaments.shift(),
        startTime: "12:00",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 3, 
        title: "CSGO",
        tournament: tournaments.shift(),
        startTime: "10:00",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 4, 
        title: "DOTA",
        tournament: tournaments.shift(),
        startTime: "20:00",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 5, 
        title: "CSGO",
        tournament: tournaments.shift(),
        startTime: "23:00",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 6, 
        title: "DOTA",
        tournament: tournaments.shift(),
        startTime: "12:00",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 7, 
        title: "LOL",
        tournament: tournaments.shift(),
        startTime: "18:00",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 8, 
        title: "DOTA",
        tournament: tournaments.shift(),
        startTime: "15:00",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 9, 
        title: "CSGO",
        tournament: tournaments.shift(),
        startTime: "15:00",
        teams: [teams.shift(), teams.shift()]
    }
]
module.exports = series;
