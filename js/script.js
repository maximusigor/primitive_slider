/*let text = document.querySelector('#text');

text.onclick = function () {
    // text.style.color = 'red';
    text.innerHTML = 'Wow!';
    text.style.color = 'blue';
    text.className = 'test';
    text.style.fontSize = '30px';
}*/

let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');

let images = document.querySelectorAll('#gallery .photos img');
let i = 0;

btn_prev.onclick = function () {
    images[i].className = 'invisible';
    i--;

    if (i < 0) {
        i = images.length - 1;
    }

    images[i].className = 'showed';
}

btn_next.onclick = function () {
    images[i].className = 'invisible';
    i++;

    if (i >= images.length) {
        i = 0;
    }

    images[i].className = 'showed';
}