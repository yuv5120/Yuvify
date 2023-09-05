console.log("Welcome to Yuvify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let MyprogressBar = document.getElementById('MyprogressBar');

let songs = [
    {songname: "Believer", filepath: "/Users/yuvraj/Documents/yuvify/1.mp3", coverpath: "cover.jpg"},
    {songname: "Believer", filepath: "/Users/yuvraj/Documents/yuvify/1.mp3", coverpath: "cover.jpg"},
    {songname: "Believer", filepath: "/Users/yuvraj/Documents/yuvify/1.mp3", coverpath: "cover.jpg"},
    {songname: "Believer", filepath: "/Users/yuvraj/Documents/yuvify/1.mp3", coverpath: "cover.jpg"},
    {songname: "Believer", filepath: "/Users/yuvraj/Documents/yuvify/1.mp3", coverpath: "cover.jpg"},
    {songname: "Believer", filepath: "/Users/yuvraj/Documents/yuvify/1.mp3", coverpath: "cover.jpg"},
    {songname: "Believer", filepath: "/Users/yuvraj/Documents/yuvify/1.mp3", coverpath: "cover.jpg"},
    {songname: "Believer", filepath: "/Users/yuvraj/Documents/yuvify/1.mp3", coverpath: "cover.jpg"},
]


//audioElement.play();
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
    }
})
 
//listen to events
audioElement.addEventListener('timeupdate' , ()=>{

// update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100)

MyprogressBar.value = progress;
})
MyprogressBar.addEventListener('change',()=>{
audioElement.currentTime = MyprogressBar.value * audioElement.duration/100;
})
