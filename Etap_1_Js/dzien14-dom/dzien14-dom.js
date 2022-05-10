const btn = document.querySelector(".change-mode");
const count = document.querySelector(".counter");
const body = document.querySelector("body");
let counter = 0;

btn.textContent = "Change to dark mode";



btn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    if(isDark){
        btn.textContent = "Change to light mode"
    } else{
        btn.textContent = "Change to dark mode"
    };

    counter ++;
    count.textContent = counter;
});
