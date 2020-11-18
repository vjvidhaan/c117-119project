function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide();
    classifier = ml5.imageClassifier(" https://teachablemachine.withgoogle.com/models/ypJe0LyBl/model.json",modelLoaded);
}

function draw(){
    image(video, 0, 0, 400, 300);
    classifier.classify(video, gotResults);
}

function gotResults(error,results){
if(error){
console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_name").innerHTML = results[0].label;
    document.getElementById("accuracy_span").innerHTML = results[0].confidence.toFixed(3);
       
}
}


function modelLoaded(){
    console.log("modelloaded!");
  }

  