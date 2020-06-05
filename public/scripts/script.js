
$(document).ready(function () {


    var music = [
        {
            name: "ALEX - Occult",
            img: "",
            sound:
                new Howl({
                    src: ["/music/ALEX - Occult.mp3"],
                    volume: 0.1,
                }),
        },

        {
            name: "Armz - Owl Vision",
            img: "",
            sound:
                new Howl({
                    src: ["/music/Armz - Owl Vision.mp3"],
                    volume: 0.1,
                }),
        },

        {
            name: "Atrey - Abyss",
            img: "",
            sound:
                new Howl({
                    src: ["/music/Atrey - Abyss.mp3"],
                    volume: 0.1,
                }),
        },
        
        {
            name: "Big Game Hunter - Firefury",
            img: "",
            sound:
                new Howl({
                    src: ["/music/Big Game Hunter - Firefury.mp3"],
                    volume: 0.1,
                }),
        },

        {
            name: "Blanke - Voice In The Machine",
            img: "",
            sound:
                new Howl({
                    src: ["/music/Blanke - Voice In The Machine.mp3"],
                    volume: 0.1,
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
            $("#trackList").children().eq(track_index).children().css("display", "contents");
            $("#trackList").children().eq(track_index).children().removeClass("fa-pause").addClass("fa-play");
            $("#play-icon").removeClass("fa-play").addClass("fa-pause");
            $("#play").removeClass("btn-primary").addClass("btn-danger");
            $("#trackTitle")[0].textContent = music[track_index].name;

        } else {
            music[track_index].sound.pause();
            $("#trackList").children().eq(track_index).addClass("pause");
            $(".fa-pause").removeClass("fa-pause").addClass("fa-play");
            $("#play").removeClass("btn-danger").addClass("btn-primary");
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
            $("#trackTitle")[0].textContent = music[track_index].name;
        }
    });

});

