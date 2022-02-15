
// When you click on the first nav, it disappears and the pop box appears.

const navi = document.querySelector('.first-nav');


const popBox = document.querySelector('.pop-box');


navi.addEventListener('click', function (e) {
        navi.style.display = "none";
        popBox.style.display = "block";
    })


// When you click the "next" button, the pop box disappears and the 
// folders appear 

const nextBtn = document.querySelector('.next-span');

nextBtn.addEventListener('click', function (e) {
    
    popBox.style.display = "none";
})



