function preload()
{

}

function setup()
{
canvas = createCanvas(350, 300);
canvas.center();

video = createCapture(VIDEO);
video.size(350, 300);
video.hide();
PoseNet = ml5.poseNet(video, modelloaded);
PoseNet.on('pose', gotPoses);
}

function draw()
{
translate(width,0);
scale(-1,1);
image(video, 0,0,350,300)
}

function modelloaded()
{
console.log("The Model is Loaded.  Go eat pizza!")
}

function gotPoses(results)
{
if (results.length > 0)
{
    console.log(results);
    console.log("the x is" + results[0].pose.nose.x);
    console.log("the y is" + results[0].pose.nose.y);
}
}