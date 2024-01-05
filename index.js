let cardImg = document.querySelectorAll('.card-img')
let cardImgDrum = document.querySelectorAll('.card-img-drum');

cardImg.forEach(div => { 
    div.addEventListener('mousemove', () => div.childNodes[1].style.display='block');
    div.addEventListener('mouseleave', () => div.childNodes[1].style.display='none')
});


cardImgDrum.forEach(div => { 
    div.addEventListener('mousemove', () => div.childNodes[1].style.display='block');
    div.addEventListener('mouseleave', () => div.childNodes[1].style.display='none')
});
