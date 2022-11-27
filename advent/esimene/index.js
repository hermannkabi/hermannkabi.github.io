var elements = [];
$("h1").hide();
$("h1").each(function(index) {
    $(this).delay(2000*index).fadeIn(1000);
});
