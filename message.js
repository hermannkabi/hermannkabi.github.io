const params = new URLSearchParams(window.location.search);

const message = params.get("m");


if(message != null){
    
    $("#top-message").text(message);
    $("#top-message").removeClass("message-hidden");

    $("#top-message").addClass("message");
    setTimeout(() => {
        $("#top-message").addClass("message-hidden");
        setTimeout(() => {
            $("#top-message").css("display", "none");
            window.history.replaceState({}, document.title, "/" + "");
        }, 5000);
    }, 5000);

}