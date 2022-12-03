// ADJUST NAVIGATION BAR COLOR ACCORDING TO WINDOW POSITION OR HAVE TEXT FADE IN AND OUT

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

// const labels = Utils.months({count: 12});
// const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: Utils.numbers(NUMBER_CFG),
//         borderColor: Utils.CHART_COLORS.red,
//         backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//       }]
// };

// var githubChart = new Chart("githubChart", {
//     type: "line",
//     data: data,
//     options: {}
// });