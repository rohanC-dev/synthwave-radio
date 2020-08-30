// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/synthwave_radio_stats", { useNewUrlParser: true, useUnifiedTopology: true });


// var trackSchema = new mongoose.Schema({
//     name: String,
//     plays: Number
// });

// var Track = mongoose.model("Track", trackSchema);




$(document).ready(function () {


    var music = [
        {
            name: "ALEX - Occult",
            img: "/images/ALEX - Occult.jpg",
            sound:
                new Howl({
                    src: ["/music/ALEX - Occult.mp3"],
                    volume: 0.1,
                    preload: false,
                    
                    onloaderror: function(error) {
                        console.log('there was an error loading ALEX - Occult.mp3: ', error);
                    },
                    onplayerror: function(error) {
                        console.log('there was an error playing ALEX - Occult.mp3: ', error);
                    },
                    // onplay: function(){
                    //     music[track_index].sound.load();
                    // },
                    // onstop: function () {
                    //     music[track_index].sound.unload();
                    // },
                    onend: function () {
                        //music[track_index].sound.unload();
                        $("#forward").click();
                        // Track.findByIdAndUpdate("5ee509fabc93a01644cc651c, )
                    }
                }),
        },

        {
            name: "Armz - Owl Vision",
            img: "/images/Armz - Owl Vision.jpg",
            sound:
                new Howl({
                    src: ["/music/Armz - Owl Vision.mp3"],
                    volume: 0.1,
                    preload: false,
                    onloaderror: function(error) {
                        console.log('there was an error loading Armz - Owl Vision.mp3: ', error);
                    },
                    onplayerror: function(error) {
                        console.log('there was an error playing Armz - Owl Vision.mp3: ', error);
                    },
                    // onplay: function(){
                    //     music[track_index].sound.load();
                    // },
                    // onstop: function () {
                    //     music[track_index].sound.unload();
                    // },
                    onend: function () {
                        //music[track_index].sound.unload();
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Atrey - Abyss",
            img: "/images/Atrey - Abyss.jpg",
            sound:
                new Howl({
                    src: ["/music/Atrey - Abyss.mp3"],
                    volume: 0.1,
                    preload: false,
                    onloaderror: function(error) {
                        console.log('there was an error loading Atrey - Abyss.mp3: ', error);
                    },
                    onplayerror: function(error) {
                        console.log('there was an error playing Atrey - Abyss.mp3: ', error);
                    },
                    // onplay: function(){
                    //     music[track_index].sound.load();
                    // },
                    // onstop: function () {
                    //     music[track_index].sound.unload();
                    // },
                    onend: function () {
                        //music[track_index].sound.unload();
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Big Game Hunter - Firefury",
            img: "/images/Big Game Hunter - Firefury.jpg",
            sound:
                new Howl({
                    src: ["/music/Big Game Hunter - Firefury.mp3"],
                    volume: 0.1,
                    preload: false,
                    onloaderror: function(error) {
                        console.log('there was an error loading Big Game Hunter - Firefury.mp3: ', error);
                    },
                    onplayerror: function(error) {
                        console.log('there was an error playing Big Game Hunter - Firefury.mp3: ', error);
                    },
                    // onplay: function(){
                    //     music[track_index].sound.load();
                    // },
                    // onstop: function () {
                    //     music[track_index].sound.unload();
                    // },
                    onend: function () {
                        //music[track_index].sound.unload();
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "BIODRIVE - Psychopath",
            img: "/images/BIODRIVE - Psychopath.jpg",
            sound:
                new Howl({
                    src: ["/music/BIODRIVE - Psychopath.mp3"],
                    volume: 0.1,
                    preload: false,
                    onloaderror: function(error) {
                        console.log('there was an error loading BIODRIVE - Psychopath.mp3: ', error);
                    },
                    onplayerror: function(error) {
                        console.log('there was an error playing BIODRIVE - Psychopath.mp3: ', error);
                    },
                    // onplay: function(){
                    //     music[track_index].sound.load();
                    // },
                    // onstop: function () {
                    //     music[track_index].sound.unload();
                    // },
                    onend: function () {
                        //music[track_index].sound.unload();
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Blanke - Voice In The Machine",
            img: "/images/Blanke - Voice In The Machine.jpg",
            sound:
                new Howl({
                    src: ["/music/Blanke - Voice In The Machine.mp3"],
                    volume: 0.1,
                    preload: false,
                    onloaderror: function(error) {
                        console.log('there was an error loading Blanke - Voice In The Machine.mp3: ', error);
                    },
                    onplayerror: function(error) {
                        console.log('there was an error playing Blanke - Voice In The Machine.mp3: ', error);
                    },
                    // onplay: function(){
                    //     music[track_index].sound.load();
                    // },
                    // onstop: function () {
                    //     music[track_index].sound.unload();
                    // },
                    onend: function () {
                        //music[track_index].sound.unload();
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Cult of Neon - Blanc Noir",
            img: "/images/Cult of Neon - Blanc Noir.jpg",
            sound:
                new Howl({
                    src: ["/music/Cult of Neon - Blanc Noir.mp3"],
                    volume: 0.1,
                    preload: false,
                    onloaderror: function(error) {
                        console.log('there was an error loading Cult of Neon - Blanc Noir.mp3: ', error);
                    },
                    onplayerror: function(error) {
                        console.log('there was an error playing Cult of Neon - Blanc Noir.mp3: ', error);
                    },
                    // onplay: function(){
                    //     music[track_index].sound.load();
                    // },
                    // onstop: function () {
                    //     music[track_index].sound.unload();
                    // },
                    onend: function () {
                        //music[track_index].sound.unload();
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Chaos Vector - Lex Talionis",
            img: "/",
            sound:
                new Howl({
                    src: ["/music/Chaos Vector - Lex Talionis.mp3"],
                    volume: 0.1,
                    preload: false,
                    onloaderror: function(error) {
                        console.log('there was an error loading Chaos Vector - Lex Talionis.mp3: ', error);
                    },
                    onplayerror: function(error) {
                        console.log('there was an error playing Chaos Vector - Lex Talionis.mp3: ', error);
                    },
                    // onplay: function(){
                    //     music[track_index].sound.load();
                    // },
                    // onstop: function () {
                    //     music[track_index].sound.unload();
                    // },
                    onend: function () {
                        //music[track_index].sound.unload();
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Cynthetic - NARC",
            img: "/images/Cynthetic - NARC.jpg",
            sound:
                new Howl({
                    src: ["/music/Cynthetic - NARC.mp3"],
                    volume: 0.1,
                    preload: false,
                    onloaderror: function(error) {
                        console.log('there was an error loading Cynthetic - NARC.mp3: ', error);
                    },
                    onplayerror: function(error) {
                        console.log('there was an error playing Cynthetic - NARC.mp3: ', error);
                    },
                    // onplay: function(){
                    //     music[track_index].sound.load();
                    // },
                    // onstop: function () {
                    //     music[track_index].sound.unload();
                    // },
                    onend: function () {
                        //music[track_index].sound.unload();
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Cyberpunk 2077 - Scavenger Hideout Music (EurocorpFx Remake)",
            img: "/images/Cyberpunk 2077 - Scavenger Hideout Music (EurocorpFx Remake).jpg",
            sound:
                new Howl({
                    src: ["/music/Cyberpunk 2077 - Scavenger Hideout Music (EurocorpFx Remake).mp3"],
                    volume: 0.1,
                    preload: false,
                    
                    // onplay: function(){
                    //     music[track_index].sound.load();
                    // },
                    // onstop: function () {
                    //     music[track_index].sound.unload();
                    // },
                    onend: function () {
                        //music[track_index].sound.unload();
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "DataDrive - Hellrider",
            img: "/images/DataDrive - Hellrider.jpg",
            sound:
                new Howl({
                    src: ["/music/DataDrive - Hellrider.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Descender - Desolate Plain",
            img: "/images/Descender - Desolate Plain.jpg",
            sound:
                new Howl({
                    src: ["/music/Descender - Desolate Plain.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Digitalism - Miami Showdown",
            img: "/images/Digitalism - Miami Showdown.jpg",
            sound:
                new Howl({
                    src: ["/music/Digitalism - Miami Showdown.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "DJ Alina - Destiny (доля)",
            img: "/images/DJ Alina - Destiny (доля).jpg",
            sound:
                new Howl({
                    src: ["/music/DJ Alina - Destiny (доля).mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Donbor - Against The Law",
            img: "/images/Donbor - Against The Law.jpg",
            sound:
                new Howl({
                    src: ["/music/DONBOR - Against The Law.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Donbor - Breaking My Brain",
            img: "/images/Donbor - Breaking My Brain.jpg",
            sound:
                new Howl({
                    src: ["/music/Donbor - Breaking My Brain.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },
        
        {
            name: "Eustass Kid - Starchild",
            img: "/images/Eustass Kid - Starchild.jpg",
            sound:
                new Howl({
                    src: ["/music/Eustass Kid - Starchild.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
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
            sound:
                new Howl({
                    src: ["/music/Hubrid & Billy Mays - Pentode.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Hyper - New Wave",
            img: "/images/Hyper - New Wave.jpg",
            sound:
                new Howl({
                    src: ["/music/Hyper - New Wave.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Mascarpone - Golden Blood",
            img: "/images/Mascarpone - Golden Blood.jpg",
            sound:
                new Howl({
                    src: ["/music/Mascarpone - Golden Blood.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Mental Minority - Dystopia Now",
            img: "/images/Mental Minority - Dystopia Now.jpg",
            sound:
                new Howl({
                    src: ["/music/Mental Minority - Dystopia Now.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Misanthropix - Boostergangs",
            img: "/images/Misanthropix - Boostergangs.jpg",
            sound:
                new Howl({
                    src: ["/music/Misanthropix - Boostergangs.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "N I M B V S - Dusk",
            img: "/images/N I M B V S - Dusk.jpg",
            sound:
                new Howl({
                    src: ["/music/N I M B V S - Dusk.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Nemix - Feed Them Lies",
            img: "/images/Nemix - Feed Them Lies.jpg",
            sound:
                new Howl({
                    src: ["/music/Nemix - Feed Them Lies.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "NightmareOwl - Strange Home",
            img: "/images/NightmareOwl - Strange Home.jpg",
            sound:
                new Howl({
                    src: ["/music/NightmareOwl - Strange Home.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Ostenvegr - MISSION II - Toward Alpha Centauri",
            img: "/images/Ostenvegr - MISSION II - Toward Alpha Centauri.jpg",
            sound:
                new Howl({
                    src: ["/music/Ostenvegr - MISSION II - Toward Alpha Centauri.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Perturbator - Vigilante 2084",
            img: "/images/Perturbator - Vigilante 2084.jpg",
            sound:
                new Howl({
                    src: ["/music/Perturbator - Vigilante 2084.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "REEVE - Pantera GT5",
            img: "/images/REEVE - Pantera GT5.jpg",
            sound:
                new Howl({
                    src: ["/music/REEVE - Pantera GT5.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Shortwire - Reconfig",
            img: "/images/Shortwire - Reconfig.jpg",
            sound:
                new Howl({
                    src: ["/music/Shortwire - Reconfig.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Sidewalks and Skeletons - Sleep Paralysis",
            img: "/images/Sidewalks and Skeletons - Sleep Paralysis.jpg",
            sound:
                new Howl({
                    src: ["/music/Sidewalks and Skeletons - Sleep Paralysis.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Sidewalks and Skeletons - The End",
            img: "/images/Sidewalks and Skeletons - The End.jpg",
            sound:
                new Howl({
                    src: ["/music/Sidewalks and Skeletons - The End.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Speed Machine - Alpha Sector",
            img: "/images/Speed Machine - Alpha Sector.jpg",
            sound:
                new Howl({
                    src: ["/music/Speed Machine - Alpha Sector.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Speed Machine - Mechanized Dystopia",
            img: "/images/Speed Machine - Mechanized Dystopia.jpg",
            sound:
                new Howl({
                    src: ["/music/Speed Machine - Mechanized Dystopia.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Stilz - Streets (Feat. Electric Dragon)",
            img: "/images/Stilz - Streets (Feat. Electric Dragon).jpg",
            sound:
                new Howl({
                    src: ["/music/Stilz - Streets (Feat. Electric Dragon).mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Street Fever - Disgrace [ZONE - Dystopian Elements]",
            img: "/images/Street Fever - Disgrace [ZONE - Dystopian Elements].jpg",
            sound:
                new Howl({
                    src: ["/music/Street Fever - Disgrace [ZONE - Dystopian Elements].mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "TeknoAXE - Army of Cyborgs",
            img: "/images/TeknoAXE - Army of Cyborgs.jpg",
            sound:
                new Howl({
                    src: ["/music/TeknoAXE - Army of Cyborgs.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "The Encounter - Astrid (Feat. Street Cleaner)",
            img: "/images/The Encounter - Astrid (Feat. Street Cleaner).jpg",
            sound:
                new Howl({
                    src: ["/music/The Encounter - Astrid (Feat. Street Cleaner).mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "The Encounter - Within",
            img: "/images/The Encounter - Astrid (Feat. Street Cleaner).jpg",
            sound:
                new Howl({
                    src: ["/music/The Encounter - Within"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Vector Kid - Orion (BLACK NOIZE VISION)",
            img: "/images/Vector Kid - Orion (BLACK NOIZE VISION).jpg",
            sound:
                new Howl({
                    src: ["/music/Vector Kid - Orion (BLACK NOIZE VISION).mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Vosto - Cyber Fire",
            img: "/images/Vosto - Cyber Fire.jpg",
            sound:
                new Howl({
                    src: ["/music/Vosto - Cyber Fire.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "ZAMILSKA - ARMY",
            img: "/images/ZAMILSKA - ARMY.jpg",
            sound:
                new Howl({
                    src: ["/music/ZAMILSKA - ARMY.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "ZAMILSKA - CLOSER",
            img: "/images/ZAMILSKA - CLOSER.jpg",
            sound:
                new Howl({
                    src: ["/music/ZAMILSKA - CLOSER.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "ZAMILSKA - FFRAY",
            img: "/images/ZAMILSKA - FFRAY.jpg",
            sound:
                new Howl({
                    src: ["/music/ZAMILSKA - FFRAY.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "ZAMILSKA - RUIN",
            img: "/images/ZAMILSKA - RUIN.jpg",
            sound:
                new Howl({
                    src: ["/music/ZAMILSKA - RUIN.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "ZAMILSKA - SMASH",
            img: "/images/ZAMILSKA - SMASH.jpg",
            sound:
                new Howl({
                    src: ["/music/ZAMILSKA - SMASH.mp3"],
                    volume: 0.1,
                    preload: false,
                    onend: function () {
                        $("#forward").click();
                    }
                }),
        },

    ];

    // var mongoose = require("mongoose");
    // mongoose.connect("mongodb://localhost:27017/synthwave_radio_stats", { useNewUrlParser: true, useUnifiedTopology: true });

    // var trackSchema = new mongoose.Schema({
    //     name: String,
    //     plays: Number
    // });

    // var Track = mongoose.model("Track", trackSchema);



    for (var i = 0; i < music.length; i++) {
        $("#trackList").append("<li class = 'list-group-item'><i class='fas fa-play' style='display:none'></i> &nbsp&nbsp" + music[i].name + /*"<div class='d-flex justify-content-end' style = 'float:right'><i class='fas fa-undo-alt'> <span><span></i></div>*/"</li>");
        // Track.create({name: music[i].name, plays: 0});
    }

    var track_index = Math.floor((Math.random() * music.length));
    $(".list-group-item").on("click", function(){
        for(var i = 0; i < music.length; i++){
            if((this.innerText.replace(/\s+/g, '')) === music[i].name.replace(/\s+/g, '')){
                if(music[track_index].sound.playing()){
                    music[track_index].sound.stop();
                }
                track_index = i;
                $("#play").click();
                // music[i].sound.load();
                // music[i].sound.play();
            }
        }
    });
    $("#play").on("click", function (event) {
        //console.log(track_index);
        event.stopImmediatePropagation();
        if (!$("#play").hasClass("active")) {
            music[track_index].sound.load();
            music[track_index].sound.play();
            $("#trackList").children().eq(track_index).removeClass("pause");
            $("#trackList").children().eq(track_index).addClass("active");
            $("#album_art").attr("src", music[track_index].img);
            $("#trackList").children().eq(track_index).children().css("display", "contents");
            $("#trackList").children().eq(track_index).children().removeClass("fa-pause").addClass("fa-play");
            $("#play-icon").removeClass("fa-play").addClass("fa-pause");
            $("#btn__content").removeClass("btn__content").removeClass("btn__content-primary").addClass("btn__content-danger");
            $("#trackTitle")[0].textContent = music[track_index].name;
        } else {
            music[track_index].sound.pause();
            $("#trackList").children().eq(track_index).addClass("pause");
            $("#play-icon").removeClass("fa-pause").addClass("fa-play");
            // $("#play").removeClass("btn-danger").addClass("btn-primary");
            $("#btn__content").removeClass("btn__content").removeClass("btn__content-danger").addClass("btn__content-primary");
            $("#trackList").children().eq(track_index).children().removeClass("fa-play").addClass("fa-pause");
        }
        $("#play").toggleClass("active");

    });

    $("#forward").on("click", function (event) {
        if ($("#play").hasClass("active")) {
            event.stopImmediatePropagation();
            music[track_index].sound.stop();
            music[track_index].sound.unload();
            var last_track = track_index;
            track_index++;
            if (track_index >= (music.length)) {
                track_index = 0;
            }
            //console.log(track_index);
            music[track_index].sound.load();
            music[track_index].sound.play();
            $("#trackList").children().eq(track_index).addClass("active");
            $("#trackList").children().eq(last_track).removeClass("active");
            $("#album_art").attr("src", music[track_index].img);
            $("#trackList").children().eq(last_track).children().removeClass("fa-pause").addClass("fa-play");
            $("#trackList").children().eq(last_track).children().css("display", "none");
            $("#trackList").children().eq(track_index).children().removeClass("fa-pause").addClass("fa-play");
            $("#trackList").children().eq(track_index).children().css("display", "contents");
            $("#trackTitle")[0].textContent = music[track_index].name;
        }

    });

    $("#backward").on("click", function (event) {
        if ($("#play").hasClass("active")) {
            event.stopImmediatePropagation();
            music[track_index].sound.stop();
            music[track_index].sound.unload();
            var last_track = track_index;
            track_index--;
            if (track_index < 0) {
                track_index = (music.length - 1);
            }
            //console.log(track_index);
            music[track_index].sound.load();
            music[track_index].sound.play();
            $("#trackList").children().eq(track_index).addClass("active");
            $("#trackList").children().eq(last_track).removeClass("active");
            $("#album_art").attr("src", music[track_index].img);
            $("#trackList").children().eq(last_track).children().removeClass("fa-pause").addClass("fa-play");
            $("#trackList").children().eq(last_track).children().css("display", "none");
            $("#trackList").children().eq(track_index).children().removeClass("fa-pause").addClass("fa-play");
            $("#trackList").children().eq(track_index).children().css("display", "contents");
            $("#trackTitle")[0].textContent = music[track_index].name;
        }
    });



    $("#track-list-btn").clickToggle(function () {
        $(".accordion").css("clip-path", "polygon(92% 0, 100% 5%, 100% 100%, 8% 100%, 0% 95%, 0 0)");
    }, function () {
        $(".accordion").css("clip-path", "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0");
    });





});

(function ($) {
    $.fn.clickToggle = function (func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function () {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));