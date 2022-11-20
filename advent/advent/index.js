var colors = {
    0:"#f06e9c", //Pink
    1:"#c1d045", //Yellow
    2:"#ff6624", //Orange
    3:"#92d36e", //Green
    4:"#9c29b7", //Purple
    5:"#0c59cf", //Blue
    6:"#e61610", //Red
}
var shapes = {
    0:"triangle",
    1:"square",
    2:"circle",
};

var humanReadable = {
    "triangle":"Kolmnurk",
    "square":"Ruut",
    "circle":"Ring",
};


//Takes the date (days) and returns a map of data

var data = {
    //November
    27:{
        "link":"https://hermannkabi.com",
    },
    //December

    1:{
        "color":colors[0],
        "shape":shapes[0],
    },
    2:{
        "color":colors[1],
        "shape":shapes[0],
    },
    3:{
        "color":colors[2],
        "shape":shapes[0],
    },
    4:{
        "link":"https://hermannkabi.com",
    },
    5:{
        "color":colors[3],
        "shape":shapes[0],
    },
    6:{
        "color":colors[4],
        "shape":shapes[0],
    },
    7:{
        "color":colors[5],
        "shape":shapes[0],
    },
    8:{
        "color":colors[6],
        "shape":shapes[0],
    },
    9:{
        "color":colors[0],
        "shape":shapes[1],
    },
    10:{
        "color":colors[1],
        "shape":shapes[1],
    },
    11:{
        "link":"m",
    },
    12:{
        "color":colors[2],
        "shape":shapes[1],
    },
    13:{
        "color":colors[3],
        "shape":shapes[1],

    },
    14:{
        "color":colors[4],
        "shape":shapes[1],
    },
    15:{
        "color":colors[5],
        "shape":shapes[1],
    },
    16:{
        "color":colors[6],
        "shape":shapes[1],
    },
    17:{
        "color":colors[0],
        "shape":shapes[2],
    },
    18:{
        "link":"#",
    },
    19:{
        "color":colors[1],
        "shape":shapes[2],
    },
    20:{
        "color":colors[2],
        "shape":shapes[2],

    },
    21:{
        "color":colors[3],
        "shape":shapes[2],
    },
    22:{
        "color":colors[4],
        "shape":shapes[2],
    },
    23:{
        "color":colors[5],
        "shape":shapes[2],
    },

}


function getDay(){
    var dayOfMonth = (new Date(Date.now())).getDate();
    // var dayOfMonth = 20;
    if(data[dayOfMonth] != null){
        if(data[dayOfMonth]["link"] != null){
            console.log(data[dayOfMonth]["link"]);
            window.location.href = (data[dayOfMonth]["link"]);
            return;
        }
        if(data[dayOfMonth]["voucher"] != null){
            $("#voucher").text(data[dayOfMonth]["voucher"]);
            $("#plus-text").show();
        }
        $("body").css("background-color", data[dayOfMonth]["color"]);
        $("#shape").attr("src", data[dayOfMonth]["shape"] + ".png");
        $("#shape").attr("alt", humanReadable[data[dayOfMonth]["shape"]]);
    }
}

getDay();