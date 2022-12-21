const params = new URLSearchParams(window.location.search);

const id = params.get("i");
const title = {
    "paremgolf":"ParemGolf",
    "surveyme":"SurveyMe",
    "books":"BookReview",
    "golfitulemused":"Golfitulemused",
}
$("#title").text(title[id] ?? "Lost?");

if(id == "paremgolf"){
    $(".detail-div").append(`
    <h2>Platforms</h2>
    <p>Android</p>
    <p>iOS</p>
    <h2>Year</h2>
    <p>2022</p>
    <h2>www</h2>
    <a href="https://play.google.com/store/apps/details?id=com.hermannkabi.parem_golf">Google Play</a>
    <a href="https://apps.apple.com/us/app/paremgolf/id6443506351">App Store</a>
    `);
    $("#app-info").append(`
    <h1>About the app</h1>
    <p>ParemGolf is a feature-rich, Estonian golf app. It has all the features you could expect from such an app, like real-time distance to holes, cloud saves, lots of statistics, and much more.</p>

    `);

}else if(id == "surveyme"){
    $(".detail-div").append(`
    <h2>Platforms</h2>
    <p>Web</p>
    <h2>Year</h2>
    <p>2021</p>
    <h2>www</h2>
    <a href="https://survey-me.web.app">Website</a>
    `);
    $("#app-info").append(`
    <h1>About the app</h1>
    <p>SurveyMe is a simple surveying and analysing app made with vanilla HTML, CSS and JS. It is an improved version of my app, Quanto Surveys, but has less features as well.</p>
    
    `);

}else if(id == "books"){
    $(".detail-div").append(`
    <h2>Platforms</h2>
    <p>Web</p>
    <h2>Year</h2>
    <p>2021</p>
    <h2>www</h2>
    <a href="https://hermannkabi.com/books">Website</a>
    `);
    $("#app-info").append(`
    <h1>About the app</h1>
    <p>BookReview is a simple website I made to record the books I've read and review them.</p>
    `);

}else if(id == "golfitulemused"){
    $(".detail-div").append(`
    <h2>Platforms</h2>
    <p>Android</p>
    <p>iOS</p>
    <h2>Year</h2>
    <p>2020</p>
    <h2>www</h2>
    <a href="https://play.google.com/store/apps/details?id=com.hermannkabi.golfitulemused">Google Play</a>
    <a href="https://apps.apple.com/us/app/golfitulemused/id1564386222">App Store</a>

    <a href="https://golfitulemused.web.app">Website</a>
    `);
    $("#app-info").append(`
    <h1>About the app</h1>
    <p>Golfitulemused was my golf app before ParemGolf. Now that the new app is avaiable, with more features and a better UI, Golfitulemused is not very useful anymore, but it is a nice reminder of where I started from and how far I've come.</p>
    `);

}else{
    $(".detail-div").append(`
    <h2>Error</h2>
    <p style="font-weight: 700">404</p>
    <h2>www</h2>
    <a href="" onclick="window.history.back()">Back</a>
    <a href="../">Home</a>
    `);
    $("#app-info").append(`<p>Sorry, this page doesn't have anything for you. Check the link or <a href="https://hermannkabi.com/contact">contact me</a></p>`)
}

