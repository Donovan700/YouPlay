let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let All_song = [
    {
        name: "Ambiant",
        path: "Ambiant.mp3",
        img: "Fond.jpg",
        singer: "Big Bray"
    },
    {
        name: "Big Dubstep",
        path: "Big_Dubstep.mp3",
        img: "Mounts.png",
        singer: "Big Bray"
    },
    {
        name: "Electro pop",
        path: "Elecambiant.mp3",
        img: "Toit.png",
        singer: "Bryan aka Big Bray"
    },
    {
        name: "Funky",
        path: "Funky.mp3",
        img: "Salle.png",
        singer: "Big Bray"
    },
    {
        name: "Kraken Remix",
        path: "Kraken.mp3",
        img: "received_435372044215915.jpeg",
        singer: "Big Bray ft. Ceasar"
    },
    {
        name: "More Than Friends",
        path: "Meghan Trainor & Jason Mraz - More Than Friends.mp3",
        img: "Toit.png",
        singer: "Jason Mraz&Meghan Trainor"
    },
    {
        name: "I got high",
        path: "Afroman_Because_I_Got_High.mp3",
        img: "FB_IMG_16351121985768172.jpg",
        singer: "Afroman"
    },
    {
        name: "When I was your man",
        path: "Bruno_Mars_-_When_I_Was_Your_Man.mp3",
        img: "FB_IMG_16351121985768172.jpg",
        singer: "Bruno Mars"
    },
    {
        name: "Pefect to me",
        path: "Anne Marie - Perfect To Me.mp3",
        img: "FB_IMG_16351121985768172.jpg",
        singer: "Anne-Marie"
    },
    {
        name: "Friends",
        path: "Anne-marie - Friends.mp3",
        img: "FB_IMG_16351121985768172.jpg",
        singer: "Anne-Marie"
    },
    {
        name: "Humble",
        path: "Skrillex & Kendrick Lamar - Humble. (skrillex Remix) (1).mp3",
        img: "FB_IMG_16351121985768172.jpg",
        singer: "Skrillex ft Kendrick Lamar"
    },
    {
        name: "Sound of Silence",
        path: "Disturbed & Myles Kennedy - The Sound Of Silence (live Feat. Myles Kennedy).mp3",
        img: "FB_IMG_16351121985768172.jpg",
        singer: "Disturbed ft Myles Kennedy"
    },
    {
        name: "This is America",
        path: "Childish Gambino - This Is America.mp3",
        img: "FB_IMG_16351121985768172.jpg",
        singer: "Childish Gambino"
    },
    {
        name: "Pony",
        path: "Ginuwine - Pony (1).mp3",
        img: "FB_IMG_16351121985768172.jpg",
        singer: "Ginuwine"
    }
];

function load_track(index_no)
{
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    title.innerHTML =  All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider , 1000);
}
load_track(index_no);

function mute_sound()
{
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}

function unmute_sound()
{
    track.volume = 100;
    volume.value = 100;
    volume_show.innerHTML = 100;
}

function reset_slider()
{
    slider.value = 0;
}

function justplay()
{
    if(playing_song==false)
    {
        playsong();
    }
    else
    {
        pausesong();
    }
}

function playsong()
{
    track.play();
    playing_song = true;
    play.innerHTML = '<i id="play"></i>';
}

function pausesong()
{
    track.pause();
    playing_song = false;
    play.innerHTML = '<i id="play"></i>';
}

function next_song()
{
    if(index_no < All_song.length - 1)
    {
        index_no += 1;
        load_track(index_no);
        playsong();
    }
    else
    {
        index_no = 0;
        playsong();
    }
}

function previous_song()
{
    if(index_no > 0)
    {
        index_no -= 1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = All_song.length;
        lopad_track(index_no);
        playsong();
    }
}

function volume_change()
{
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}

function change_duration()
{
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function autoplay_switch()
{
    if(autoplay==1)
    {
        autoplay=0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
    }
    else
    {
        autoplay = 1;
        auto_play.style.background = "#FF8A65";
    }
}

function range_slider()
{
    let position = 0;
    if(!isNaN(track.duration))
    {
        position = track.currentTime * (100/ track.duration);
        slider.value = position;
    }
    if(track.ended)
    {
        play.innerHTML = '<i id="auto"></i>';
        if(auto^lay==1)
        {
            index_no +=1;
            load_track(index_no);
            playsong();
        }
    }
}