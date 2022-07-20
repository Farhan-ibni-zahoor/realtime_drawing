noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);


    poseNet = ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose, gotPoses')
}

function draw() {
    background('#969A97');
    document.getElementById("square_side").innerHTML = "width and Height of a Square will be =" + difference +"px";
    fil('#F90093');
    stroke('#F90093')
    square(noseX,noseY,difference);
}
function ModelLoaded() {
    console.log('PoseNet is Initialized!');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].nose.pose.x;
        noseY=results[0].nose.pose.y;
        console.log("noseX =" + noseX +"noseY =" + noseY);
        leftwristX = results[0].pose.leftwrist.x;
        rightwristX = results[0].pose.rightwrist.x;

        difference = floor(leftwristX - rightwristX);
        console.log("leftwristX = " + leftwristX + "rightwristX = " + rightwristX + "difference = " + difference );

    }
}
