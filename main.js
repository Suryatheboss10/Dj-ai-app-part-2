Song = "";

function setup(){
    Canvas = createCanvas(600, 500);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500)
}

function preload(){
    Song = loadSound("music.mp3")
}

function play(){
    song.play();
}