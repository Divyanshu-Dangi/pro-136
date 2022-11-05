status="";
function setup()
{
    canvas=createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start()
{
    ObjectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelloaded()
{
    console.log("model is loaded");
    status=true;
    video.loop();
    video.volume(0);
    video.speed(1);
}
function draw()
{
    image(video,0,0,480,380);
}