const themeBtn = document.createElement('div');
checkTheme();
themeBtn.className = 'theme-btn';
themeBtn.innerHTML = document.documentElement.getAttribute('data-theme') == "dark" ? "<img src='/icons/summer.png'>" : "<img src='/icons/moon.png'>";
document.body.prepend(themeBtn);

const backBtn = document.createElement('div');
backBtn.className = 'theme-btn back-btn';
backBtn.innerHTML = '<img src="/icons/back.png">';

var path = window.location.pathname.replaceAll("/", "");
if(path && path != "index.html"){
    document.body.prepend(backBtn);
}



function checkTheme(){
    if(!window.localStorage.getItem("site-theme")){
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode
            localStorage.setItem("site-theme", "dark");
        }else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
            //light mode
            localStorage.setItem("site-theme", "light");
        }
    }
    
    if(window.localStorage.getItem("site-theme") == "dark"){
        document.documentElement.setAttribute('data-theme', 'dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
    }

    themeBtn.innerHTML = document.documentElement.getAttribute('data-theme') == "dark" ? "<img src='/icons/summer.png'>" : "<img src='/icons/moon.png'>";
}

themeBtn.addEventListener("click", function (){
    if(window.localStorage.getItem("site-theme") == "dark"){
        localStorage.setItem("site-theme", "light");
    }else{
        localStorage.setItem("site-theme", "dark");
    }

    document.body.style.transition = "all 250ms";
    checkTheme();
});

backBtn.addEventListener("click", function (){
    fallbackUrl = '/';
    var prevPage = window.location.href;

    window.history.go(-1);

    setTimeout(function(){ 
        if (window.location.href == prevPage) {
            window.location.href = fallbackUrl; 
        }
    }, 100);
});


const themeBtn2 = document.querySelectorAll('.theme-btn');

window.addEventListener('scroll', () => {
    if(window.innerWidth <= 600){
        themeBtn2.forEach(btn => btn.classList.toggle('hidden', window.scrollY > 0));
    }
});