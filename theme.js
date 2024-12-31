const themeBtn = document.createElement('div');
checkTheme();
themeBtn.className = 'theme-btn';
themeBtn.innerHTML = document.documentElement.getAttribute('data-theme') == "dark" ? "<img src='/icons/summer.png'>" : "<img src='/icons/moon.png'>";
document.body.prepend(themeBtn);

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

    document.body.style.transition = "all 100ms";
    checkTheme();
});

