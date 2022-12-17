$(".start").click(function (){
    setTimeout(() => {
        $(".start").hide();
        $("#initial").hide();
        $("#scoring").show();
        startGame();
    }, 500);
});

const zeroPad = (num, places) => String(num).padStart(places, '0')
var time = 0;
var childrenScore = 0;
var parentScore = 0;

function startGame(){
    
    var inter = setInterval(() => {
        time += 3;
        if(time == (46*60 + 30)){
            console.log("here");
            clearInterval(inter);
            alert("POOLAEG!!!");
            setTimeout(() => {
                secondHalf();
            }, 5000);
            return;
        }

        if(time == (12*60 + 33)){
            alert("VÄRAV!!!");
            childrenScore ++;
        }
        if(time == (18*60)){
            alert("VÄRAV!!!");
            childrenScore ++;
        }
       
        
        var mins = zeroPad(Math.floor(time / 60), 2);
        var secs = zeroPad(time - mins * 60, 2);
        $("#time").text(mins.toString() + ":" + secs.toString());
        $("#children-score").text(childrenScore);
        $("#parent-score").text(parentScore);

    }, 5);
}


function secondHalf(){
    time = 45*60;
    var inter2 = setInterval(() => {
        time += 3;
        if(time >= 98*60){
            console.log("thats it");
            clearInterval(inter2);
            endGame();
            return;
        }

        
        
        if(time == (59*60 + 42)){
            alert("VÄRAV!!!");
            parentScore ++;
        }
        if(time == (68*60)){
            alert("VÄRAV!!!");
            parentScore ++;
        }
        if(time == (75*60 + 51)){
            alert("VÄRAV!!!");
            parentScore ++;
        }
        if(time == (77*60)){
            alert("VÄRAV!!!");
            childrenScore ++;
        }
        if(time == (81*60)){
            alert("VÄRAV!!!");
            childrenScore ++;
        }
        if(time == (87*60)){
            alert("VÄRAV!!!");
            parentScore ++;
        }
        if(time == (97*60)){
            alert("VÄRAV!!!");
            parentScore ++;
        }
        var mins = zeroPad(Math.floor(time / 60), 2);
        var secs = zeroPad(time - mins * 60, 2);
        $("#time").text(mins.toString() + ":" + secs.toString());
        $("#children-score").text(childrenScore);
        $("#parent-score").text(parentScore);

    }, 5);
}

function endGame(){
    alert("Lõpuvile! Suurepärane 5:4 võit Marile ja Ristole");
    $("#scoring").hide();
    $("#end").show();
    
}

$(".reward").click(function (){
    window.location.href = "auhind.pdf";
});