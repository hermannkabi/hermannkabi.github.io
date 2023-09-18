// Handles the job title fancy change
const chars = ['&', '@', '*', '^', ':', ',', '$', '.', '=', '!', '/', '#', '-', '_', '+', '?', '>', '<', '|', '~', '%', '`', '{', '}', '(', ')', '[', ']', '"', "'", '\\', ';'];

var jobs = [
    "Veebiarendaja",
    "Mobiiliarendaja",
    "Programmeerimishuviline",
];

var currentJob = jobs[0];

for(var i = 0; i < currentJob.length; i++){
    var char = currentJob[i];
    $(".job-title").append("<span>"+char+"</span>");
}


setInterval(async function (){
    for (var i = currentJob.length - 1; i >= 0; i--){


        var randomTime = Math.floor(Math.random() * 750);

        var index = Math.floor(Math.random() * chars.length);

        const currentIndex = i + 1;

        const randomChar = chars[index];

        var color = "white";

        if(Math.random() < 0.5){
            color = "var(--primary-color)";
        }

        const currentColor = color;


        setTimeout(function (){
            $(".job-title span:nth-child("+(currentIndex)+")").css("color", currentColor).text(randomChar);
        }, randomTime);
    }
    setTimeout(async function(){
        var currentJobsIndex = jobs.indexOf(currentJob);
        var newJobIndex = currentJobsIndex + 1 >= jobs.length ? 0 : currentJobsIndex + 1;

        var newJob = jobs[newJobIndex];
        // This section deals with getting the correct amount of spans
        if(newJob.length > currentJob.length){
            var spansToAdd = newJob.length - currentJob.length;

            for(var idx = 0; idx < spansToAdd; idx++){
                $(".job-title").append("<span style='color:white'></span>");
            }
        }else if(newJob.length < currentJob.length){
            var spansToRemove = currentJob.length - newJob.length;

            for(var idx = currentJob.length - 1; idx >= (currentJob.length - spansToRemove); idx--){
                $(".job-title span:nth-child("+(idx+1)+")").remove();
            }
        }



        currentJob = newJob;

        // Now we have the correct amount of spans

        for(var indx = 0; indx < currentJob.length; indx++){
            
            $(".job-title span:nth-child("+(indx+1)+")").css("color", "white").text(currentJob[indx]);
            await new Promise(r => setTimeout(r, 40));
        }
        
    }, 1000);
}, 10000);