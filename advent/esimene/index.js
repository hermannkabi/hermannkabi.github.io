function onStart(){
    setTimeout(function (){
        $("#second").fadeIn(function (){
            setTimeout(function (){
                $("#third").fadeIn(function (){
                    setTimeout(function (){
                        $("#third, #second").fadeOut(function (){
                            $("#first > h1").text("Noh, mis ootad???");
                            setTimeout(function (){
                                $("#second > h1").text("Tahad oma advendikinki. Palun väga");
                                $("#second").fadeIn(function (){
                                    $("#third > h1").text("HEAD ADVENTI!");
                                    var interval = setInterval(function (){
                                        $("#third").fadeToggle(400);
                                    }, 400);
                                    setTimeout(function (){
                                        clearInterval(interval);

                                        $("#first > h1").text("Omg, miks sa ikka veel siin oled?")
                                        $("#third").remove();
                                        $("#second").hide();

                                        $("#second > h1").text("Uhhh, hea küll, ma annan sulle selle kingi, mis ma Emmale tegin");
                                        setTimeout(()=>{
                                            $("#second").fadeIn(function (){
                                                setTimeout(()=>{
                                                    window.location.href = "second-page.html";
                                                }, 1000);
                                            });
                                        }, 2000);
                                    }, 5000);
                                });
                            }, 1000);
                        });
                    }, 2000);
                });
            }, 2000);
        });
    }, 2000);
}

onStart();