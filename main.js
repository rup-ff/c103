Webcam.set({
    width:400,
    height:399,
    image_format : 'png',
    png_quality: 100

});
camera = document.getElementById("camera");
Webcam.attach( '#camera');

function take_snapshot()
{
 Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
 });
}
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IzrC_ym7-/.json',modelLoaded);
function modelLoaded()
{
 console.log("modelLoaded");
}
function check()
{
  img = document.getElementById('captured image');
  classifier.classify(img,gotResults);
}
function gotResult(error, results) 
{
 if(error) 
 {
     console.error(error);
 }
    else{
     console.log(results);
     document.getElementById("result_object_name").innerHTML = results[0].label;
     document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);

    }
 
}