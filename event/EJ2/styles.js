document.addEventListener('DOMContentLoaded', function () {

    let styleSelect = document.getElementById('styleSelect');


    styleSelect.addEventListener('change', function () {

        let selectedStyle = styleSelect.value;
        console.log(selectedStyle)
        document.body.classList.remove('light', 'dark', 'minimalist');


        document.body.classList.add(selectedStyle);
    });
});
