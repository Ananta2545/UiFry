let dark_btn = document.getElementById("dark-btn");
let logo = document.querySelector('.logo');

dark_btn.onclick = function(){
    dark_btn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    logo.classList.toggle("logo-light");
    logo.classList.toggle("logo-dark");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    dark_btn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
    logo.classList.add("logo-light");
    logo.classList.remove("logo-dark");
}
else if(localStorage.getItem("theme") == "dark"){
    dark_btn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
    logo.classList.add("logo-dark");
    logo.classList.remove("logo-light");
}
else{
    localStorage.setItem("theme", "light");
}


document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll(".fade-in");

    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + scrollTop;

            if (scrollTop > elementTop - window.innerHeight) {
                setTimeout(() => {
                    element.classList.add("fade-in-visible");
                }, 100); // 1 second delay for fade-in effect
            } else {
                setTimeout(() => {
                    element.classList.remove("fade-in-visible");
                }, 100);
            }
        });
    });
});

