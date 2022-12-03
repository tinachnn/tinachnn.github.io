function toggleTetrisDesc() {
    let title = document.getElementById("card-1-title");
    let desc = document.getElementById("card-1-desc");
    let image = document.getElementById("card-1-image");
    if (title && desc && image) {
        title.classList.toggle("hidden");
        desc.classList.toggle("hidden");
        image.classList.toggle("opaque");
    }
}

function toggleGrowDesc() {
    let title = document.getElementById("card-2-title");
    let desc = document.getElementById("card-2-desc");
    let image = document.getElementById("card-2-image");
    if (title && desc && image) {
        title.classList.toggle("hidden");
        desc.classList.toggle("hidden");
        image.classList.toggle("opaque");
    }
}