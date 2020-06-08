
$(document).ready(function () {


    var music = [
        {
            name: "ALEX - Occult",
            img: "/images/ALEX - Occult.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/ALEX%20-%20Occult.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Armz - Owl Vision",
            img: "/images/Armz - Owl Vision.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Armz%20-%20Owl%20Vision.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Atrey - Abyss",
            img: "/images/Atrey - Abyss.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Atrey%20-%20Abyss.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },
        
        {
            name: "Big Game Hunter - Firefury",
            img: "/images/Big Game Hunter - Firefury.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Big%20Game%20Hunter%20-%20Firefury.mp3"],
                    volume: 0.1,
                    onend: function(){
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
                    onend: function(){
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
                    onend: function(){
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
                    onend: function(){
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
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "DataDrive - Hellrider",
            img: "/images/DataDrive - Hellrider.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/DataDrive%20-%20Hellrider.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Descender - Desolate Plain",
            img: "/images/Descender - Desolate Plain.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Descender%20-%20Desolate%20Plain.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Digitalism - Miami Showdown",
            img: "/images/Digitalism - Miami Showdown.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Digitalism%20-%20Miami%20Showdown.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "DJ Alina - Destiny (доля)",
            img: "/images/DJ Alina - Destiny (доля).jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/DJ%20Alina%20-%20Destiny%20%5B%D0%B4%D0%BE%D0%BB%D1%8F%5D.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Donbor - Against The Law",
            img: "/images/Donbor - Against The Law.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/DONBOR%20-%20Against%20The%20Law.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Donbor - Breaking My Brain",
            img: "/images/Donbor - Breaking My Brain.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Donbor%20-%20Breaking%20My%20Brain.mp3"],
                    volume: 0.1,
                    onend: function(){
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
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Hubrid%20%26%20Billy%20Mays%20-%20Pentode.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Hyper - New Wave",
            img: "/images/Hyper - New Wave.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Hyper%20-%20New%20Wave.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Mascarpone - Golden Blood",
            img: "/images/Mascarpone - Golden Blood.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Mascarpone%20-%20Golden%20Blood.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Mental Minority - Dystopia Now",
            img: "/images/Mental Minority - Dystopia Now.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Mental%20Minority%20-%20Dystopia%20Now.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Misanthropix - Boostergangs",
            img: "/images/Misanthropix - Boostergangs.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Misanthropix%20-%20Boostergangs.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "N I M B V S - Dusk",
            img: "/images/N I M B V S - Dusk.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/N%20I%20M%20B%20V%20S%20-%20Dusk.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Nemix - Feed Them Lies",
            img: "/images/Nemix - Feed Them Lies.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Nemix%20-%20Feed%20Them%20Lies.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "NightmareOwl - Strange Home",
            img: "/images/NightmareOwl - Strange Home.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/NightmareOwl%20-%20Strange%20Home.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Perturbator - Vigilante 2084",
            img: "/images/Perturbator - Vigilante 2084.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Perturbator%20-%20Vigilante%202084.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "REEVE - Pantera GT5",
            img: "/images/REEVE - Pantera GT5.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/REEVE%20-%20Pantera%20GT5.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Shortwire - Reconfig",
            img: "/images/Shortwire - Reconfig.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Shortwire%20-%20Reconfig.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },
        
        {
            name: "Sidewalks and Skeletons - Sleep Paralysis",
            img: "/images/Sidewalks and Skeletons - Sleep Paralysis.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Sidewalks%20and%20Skeletons%20-%20Sleep%20Paralysis.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Sidewalks and Skeletons - The End",
            img: "/images/Sidewalks and Skeletons - The End.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Sidewalks%20and%20Skeletons%20-%20The%20End.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Speed Machine - Alpha Sector",
            img: "/images/Speed Machine - Alpha Sector.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Speed%20Machine%20-%20Alpha%20Sector.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Speed Machine - Mechanized Dystopia",
            img: "/images/Speed Machine - Mechanized Dystopia.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Speed%20Machine%20-%20Mechanized%20Dystopia.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Stilz - Streets (Feat. Electric Dragon)",
            img: "/images/Stilz - Streets (Feat. Electric Dragon).jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Stilz%20-%20Streets%20%5BFeat.%20Electric%20Dragon%5D.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Street Fever - Disgrace [ZONE - Dystopian Elements]",
            img: "/images/Street Fever - Disgrace [ZONE - Dystopian Elements].jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Street%20Fever%20-%20Disgrace%20%5BZONE%20-%20Dystopian%20Elements%5D.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "The Encounter - Astrid (Feat. Street Cleaner)",
            img: "/images/The Encounter - Astrid (Feat. Street Cleaner).jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/The%20Encounter%20-%20Astrid%20%5BFeat.%20Street%20Cleaner%5D.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Vector Kid - Orion (BLACK NOIZE VISION)",
            img: "/images/Vector Kid - Orion (BLACK NOIZE VISION).jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/The%20Encounter%20-%20Astrid%20%5BFeat.%20Street%20Cleaner%5D.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "Vosto - Cyber Fire",
            img: "/images/Vosto - Cyber Fire.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/Vosto%20-%20Cyber%20Fire.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "ZAMILSKA - ARMY",
            img: "/images/ZAMILSKA - ARMY.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/ZAMILSKA%20-%20ARMY.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "ZAMILSKA - CLOSER",
            img: "/images/ZAMILSKA - CLOSER.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/ZAMILSKA%20-%20CLOSER.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "ZAMILSKA - FFRAY",
            img: "/images/ZAMILSKA - FFRAY.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/ZAMILSKA%20-%20FFRAY.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "ZAMILSKA - RUIN",
            img: "/images/ZAMILSKA - RUIN.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/ZAMILSKA%20-%20RUIN.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        {
            name: "ZAMILSKA - SMASH",
            img: "/images/ZAMILSKA - SMASH.jpg",
            sound:
                new Howl({
                    src: ["https://storage.cloud.google.com/synthwaveradio.appspot.com/music/ZAMILSKA%20-%20SMASH.mp3"],
                    volume: 0.1,
                    onend: function(){
                        $("#forward").click();
                    }
                }),
        },

        ];

    

    for(var i = 0; i < music.length; i++){
        $("#trackList").append("<li class = 'list-group-item'><i class='fas fa-play' style='display:none'></i> &nbsp&nbsp" + music[i].name + "</li>");
    }

    var track_index = Math.floor((Math.random() * music.length));

    $("#play").on("click", function (event) {
        console.log(track_index);
        event.stopImmediatePropagation();
        if (!$("#play").hasClass("active")) {
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
            var last_track = track_index;
            track_index++;
            if (track_index >= (music.length)) {
                track_index = 0;
            }
            console.log(track_index);
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
            var last_track = track_index;
            track_index--;
            if (track_index < 0) {
                track_index = (music.length-1);
            }
            console.log(track_index);
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

   

    $("#track-list-btn").clickToggle(function(){
        $(".accordion").css("clip-path", "polygon(92% 0, 100% 5%, 100% 100%, 8% 100%, 0% 95%, 0 0)");
    }, function(){
        $(".accordion").css("clip-path", "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0");
    });

    

    

});




(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));