const b = document.querySelector('button.button--no')

b.addEventListener("mouseover", movehover)

function movehover() {
    const i = Math.floor(Math.random() * window.innerWidth) + 1;
    const j = Math.floor(Math.random() * window.innerHeight) + 1;

    b.style.right = i + "px"
    b.style.bottom = j + "px"
}

const a = document.querySelector('button.button--yes')
a.addEventListener("mouseover", yesClick)

function yesClick() {
    alert("Very correct answer :)))");
}