//This is the typewriter animation code
//1. Get the <p> element and remove the text
//2. One letter at a time, append to <p>'s inner HTML
//3. Sleep for a bit

async function typewriter(){
    $(".main-content").show();
    var list = []

    $("p, a, .link").hide();
    $("p, a, .link").each(async function (i, obj){
        list.push(obj)
    });

    for(var obj in list){
        var text = list[obj].innerText;
        var html = list[obj].innerHTML;
        $(list[obj]).text("").show();

        for(var letter in text){
            $(list[obj]).text($(list[obj]).text() + text.charAt(letter));
            await new Promise(r => setTimeout(r, 0));
        }
        $(list[obj]).html(html);
        await new Promise(r => setTimeout(r, 20));
    }
}

typewriter();
