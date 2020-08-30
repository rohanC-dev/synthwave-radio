var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

var music = [
    {
        name: "ALEX - Occult",
        img: "/images/ALEX - Occult.jpg",

    },

    {
        name: "Armz - Owl Vision",
        img: "/images/Armz - Owl Vision.jpg",

    },

    {
        name: "Atrey - Abyss",
        img: "/images/Atrey - Abyss.jpg",

    },

    {
        name: "Big Game Hunter - Firefury",
        img: "/images/Big Game Hunter - Firefury.jpg",

    },

    {
        name: "BIODRIVE - Psychopath",
        img: "/images/BIODRIVE - Psychopath.jpg",

    },

    {
        name: "Blanke - Voice In The Machine",
        img: "/images/Blanke - Voice In The Machine.jpg",

    },

    {
        name: "Cult of Neon - Blanc Noir",
        img: "/images/Cult of Neon - Blanc Noir.jpg",

    },

    {
        name: "Cynthetic - NARC",
        img: "/images/Cynthetic - NARC.jpg",

    },

    {
        name: "DataDrive - Hellrider",
        img: "/images/DataDrive - Hellrider.jpg",

    },

    {
        name: "Descender - Desolate Plain",
        img: "/images/Descender - Desolate Plain.jpg",

    },

    {
        name: "Digitalism - Miami Showdown",
        img: "/images/Digitalism - Miami Showdown.jpg",

    },

    {
        name: "DJ Alina - Destiny (доля)",
        img: "/images/DJ Alina - Destiny (доля).jpg",

    },

    {
        name: "Donbor - Against The Law",
        img: "/images/Donbor - Against The Law.jpg",

    },

    {
        name: "Donbor - Breaking My Brain",
        img: "/images/Donbor - Breaking My Brain.jpg",

    },

    // {
    //     name: "HER - RUINER Soundtrack (Unreleased)",
    //     img: "/images/HER - RUINER Soundtrack (Unreleased).jpg",
    //     sound:
    //         new Howl({
    //             src: ["/music/HER - RUINER Soundtrack (Unreleased).mp3"],
    //             volume: 0.1,
    //             onend: function(){
    //                 $("#forward").click();
    //             }
    //         }),
    // },

    {
        name: "Hubrid & Billy Mays - Pentode",
        img: "/images/Hubrid & Billy Mays - Pentode.jpg",

    },

    {
        name: "Hyper - New Wave",
        img: "/images/Hyper - New Wave.jpg",

    },

    {
        name: "Mascarpone - Golden Blood",
        img: "/images/Mascarpone - Golden Blood.jpg",

    },

    {
        name: "Mental Minority - Dystopia Now",
        img: "/images/Mental Minority - Dystopia Now.jpg",

    },

    {
        name: "Misanthropix - Boostergangs",
        img: "/images/Misanthropix - Boostergangs.jpg",

    },

    {
        name: "N I M B V S - Dusk",
        img: "/images/N I M B V S - Dusk.jpg",

    },

    {
        name: "Nemix - Feed Them Lies",
        img: "/images/Nemix - Feed Them Lies.jpg",

    },

    {
        name: "NightmareOwl - Strange Home",
        img: "/images/NightmareOwl - Strange Home.jpg",

    },

    {
        name: "Perturbator - Vigilante 2084",
        img: "/images/Perturbator - Vigilante 2084.jpg",

    },

    {
        name: "REEVE - Pantera GT5",
        img: "/images/REEVE - Pantera GT5.jpg",

    },

    {
        name: "Shortwire - Reconfig",
        img: "/images/Shortwire - Reconfig.jpg",

    },

    {
        name: "Sidewalks and Skeletons - Sleep Paralysis",
        img: "/images/Sidewalks and Skeletons - Sleep Paralysis.jpg",

    },

    {
        name: "Sidewalks and Skeletons - The End",
        img: "/images/Sidewalks and Skeletons - The End.jpg",

    },

    {
        name: "Speed Machine - Alpha Sector",
        img: "/images/Speed Machine - Alpha Sector.jpg",

    },

    {
        name: "Speed Machine - Mechanized Dystopia",
        img: "/images/Speed Machine - Mechanized Dystopia.jpg",

    },

    {
        name: "Stilz - Streets (Feat. Electric Dragon)",
        img: "/images/Stilz - Streets (Feat. Electric Dragon).jpg",

    },

    {
        name: "Street Fever - Disgrace [ZONE - Dystopian Elements]",
        img: "/images/Street Fever - Disgrace [ZONE - Dystopian Elements].jpg",

    },

    {
        name: "The Encounter - Astrid (Feat. Street Cleaner)",
        img: "/images/The Encounter - Astrid (Feat. Street Cleaner).jpg",

    },

    {
        name: "Vector Kid - Orion (BLACK NOIZE VISION)",
        img: "/images/Vector Kid - Orion (BLACK NOIZE VISION).jpg",

    },

    {
        name: "Vosto - Cyber Fire",
        img: "/images/Vosto - Cyber Fire.jpg",

    },

    {
        name: "ZAMILSKA - ARMY",

    },

    {
        name: "ZAMILSKA - CLOSER",
        img: "/images/ZAMILSKA - CLOSER.jpg",

    },

    {
        name: "ZAMILSKA - FFRAY",
        img: "/images/ZAMILSKA - FFRAY.jpg",

    },

    {
        name: "ZAMILSKA - RUIN",
        img: "/images/ZAMILSKA - RUIN.jpg",

    },

    {
        name: "ZAMILSKA - SMASH",

    },

];


var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/synthwave_radio_stats", { useNewUrlParser: true, useUnifiedTopology: true });

var trackSchema = new mongoose.Schema({
    name: String,
    plays: Number
});


var Track = mongoose.model("Track", trackSchema);


app.get("/", function (req, res) {
    res.render("player");
});

app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("server started");
});


