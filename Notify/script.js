for (let i = 0; i < 25; i++) {
    let div = document.createElement('div');
    div.className = 'galety-image';
    document.querySelector('.grid-galery').appendChild(div);
    div.onmouseover = () => {
        div.classList.toggle('backImage');
    }
    div.onmouseout = () => {
        div.classList.toggle('backImage');
    }
}
