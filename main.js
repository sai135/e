rightWrist="";
leftWrist=""
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }
  function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
  }
  leftWrist=results[0][0].pose.leftWrist.x;
  rightWrist=results[0][0].pose.l=rightWrist.x;
  difference = floor(leftWristX - rightWristX);
}
function draw() {
    background('#969A97');
    textSize(difference);
    fill("#5d009c");
    text("Sai Eshanth", 275, 275);
}

