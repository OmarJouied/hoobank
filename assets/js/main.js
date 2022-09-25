const links = document.querySelectorAll('header a');
let target = links[0];
links.forEach(link => {
    link.onclick = function () {
        this.classList.add('active');
        target.classList.remove('active');
        target = this;
    }
})