let btn = document.querySelector('.on');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let btn1 = document.querySelector('.on1');

btn.addEventListener('click', ()=>{

    if (one.style.display == "none" && two.style.display == "flex") {
        one.style.display = "flex";
        two.style.display = "none";
    } else {
        one.style.display = "none";
        two.style.display = "flex";
    };
});

btn1.addEventListener('click', ()=>{

    if (one.style.display == "none" && two.style.display == "flex") {
        one.style.display = "flex";
        two.style.display = "none";
    } else {
        one.style.display = "none";
        two.style.display = "flex";
    };
});