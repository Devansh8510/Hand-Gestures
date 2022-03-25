Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    });
    attach=document.getElementById("camera");
    Webcam.attach("#camera");
    function Snapshot () {
        Webcam.snap(function(source_of_image) {
            document.getElementById("result").innerHTML="<img id='img12d' src='"+source_of_image+"'/>";
    
        })
    }
    console.log("ml5 version-",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/09vbZrBBD/model.json",model_loaded);
    function model_loaded() {
        console.log("your model has been loaded");
    }
    
    Prediction1="";
    Prediction2="";
    
    function check(){
        getimg=document.getElementById("img12d");
        classifier.classify(getimg,gotresult);
    }
    function gotresult(error,result) {
        if (error) {
            console.log(error)
        }
        else{
            console.log(result);
            document.getElementById("Emotion1").innerHTML=result[0].label;
            document.getElementById("Emotion2").innerHTML=result[1].label;
            Prediction1=result[0].label;
            Prediction2=result[1].label;
            speak();
            if (result[0].label=="Victory") {
                document.getElementById("Emoji1").innerHTML="&#9996;";
            }
            if (result[0].label=="Amazing") {
                document.getElementById("Emoji1").innerHTML="&#128076;";
            }
            if (result[0].label=="Best") {
                document.getElementById("Emoji1").innerHTML="&#128077;";
            }
            
            if (result[1].label=="Victory") {
                document.getElementById("Emoji2").innerHTML="&#9996;";
            }
            if (result[1].label=="Amazing") {
                document.getElementById("Emoji2").innerHTML="&#128076;";
            }
            if (result[1].label=="Best") {
                document.getElementById("Emoji2").innerHTML="&#128077;";
            }
            
        }
    }
    function speak(){
        getapi=window.speechSynthesis;
        datastore="the first prediction is "+Prediction1+" and second prediction is "+Prediction2;
        context=new SpeechSynthesisUtterance(datastore);
        getapi.speak(context);
    
    }
    