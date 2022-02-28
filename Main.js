random_no = Math.floor((Math.random()*array_1.length)+1);
timer_counter = 0;
Score = 0;

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    background("White")

}

function draw()
{
strokeWeight(6);
stroke(0);
}

function check_sketch() {

    
}
function clearCanvas() 
{
    background("white")
}

function preload() {
    classifier = ml5.imageClassifier('DoodleNet')
    }

    function got_Result(error, results) {
        if(error)
        {
            console.error(error);
    
        }
        console.log(results);
        document.getElementById("label").innerHTML = "label =   "+ results[0].label;
        document.getElementById("confidence").innerHTML = "confidence =   "+ Math.round (results[0].confidence * 100) + "%";
    
        utterThis = new SpeechSynthesisUtterance(results[0].label); 
        synth.speak(utterThis);
    }
    
    function classifyCanvas() {
        classifier.classify(canvas, got_Result);
    }
    

    