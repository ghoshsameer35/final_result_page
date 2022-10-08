// share open  
const share = document.querySelector('.down_section_3')
const overlay_share = document.querySelector('.share_overlay')
share.addEventListener('click', function () {
    overlay_share.style.display = "flex";
    // console.log("Hello world!"); 
});
overlay_share.addEventListener('click', function () {
    overlay_share.style.display = "none";

});
// share close 
// **************************************************************************
// review open 
const review = document.querySelector('.down_section_4')
const overlay_review = document.querySelector('.review_overlay')
const close = document.querySelector('.close')
review.addEventListener('click', function () {
    overlay_review.style.display = "flex";
    // console.log("Hello world!");
});
close.addEventListener('click', function () {
    overlay_review.style.display = "none";
});
// review close 
// reating 
document.querySelectorAll('.feedback li').forEach(entry => entry.addEventListener('click', e => {
    if(!entry.classList.contains('active')) {
        document.querySelector('.feedback li.active').classList.remove('active');
        entry.classList.add('active');
    }
    e.preventDefault();
}));