const params = new URLSearchParams(window.location.search);

const message = params.get("m");


if(message != null){
    const parameters = new URLSearchParams(window.location.search);
    parameters.delete(m);
    $("#top-message").text(message);
    $("#top-message").removeClass("message-hidden");

    $("#top-message").addClass("message");
    setTimeout(() => {
        $("#top-message").addClass("message-hidden");
        setTimeout(() => {
            $("#top-message").css("display", "none");
        }, 5000);
    }, 5000);

}