document.addEventListener('DOMContentLoaded', function () {
    let trackedElement = document.querySelector("*");

    let mousePositionParagraph = document.getElementById('mousePosition');

    trackedElement.addEventListener('mousemove', function (event) {

        mousePositionParagraph.textContent = `Mouse Over Element: ${event.target.tagName}, X: ${event.offsetX}, Y: ${event.offsetY}`;
    });

    trackedElement.addEventListener('mouseover', function (event) {

        event.target.classList.toggle('highlight');
    });

    trackedElement.addEventListener('mouseout', function (event) {

        event.target.classList.toggle('highlight');

        mousePositionParagraph.textContent = '';
    });
});