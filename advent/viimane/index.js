const christmas = 1671832800;


setInterval(() => {
    var now = parseInt((new Date().getTime() / 1000).toFixed(0));
    document.getElementById("seconds").innerText = christmas - now;
}, 1000);