document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('clickTable');
    const targetInfo = document.getElementById('targetInfo');
    let previousCell;

    table.addEventListener('click', function (event) {
        const clickedCell = event.target;

        let colored = document.getElementsByClassName('blue');
         

        if (clickedCell.tagName === 'TD') {
            if (previousCell) {
                previousCell.classList.remove('green', 'red', 'blue');
            }

            const isCtrlPressed = event.ctrlKey;
            const isShiftPressed = event.shiftKey;

            const row = clickedCell.parentElement.rowIndex;
            const col = clickedCell.cellIndex;

            const target = {
                tag: clickedCell.tagName,
                id: clickedCell.id,
                textContent: clickedCell.textContent,
                rowContent: Array.from(table.rows[row].cells).map(cell => cell.innerText),
                colContent: Array.from(table.rows).map(row => row.cells[col].innerText),
            };
            Array.from(table.rows[row].cells).map(cell => cell.classList.add('blue'));
            targetInfo.textContent = JSON.stringify(target);
            if (isShiftPressed) {
                clickedCell.classList.add('blue');
            } else if (isCtrlPressed) {
                clickedCell.classList.add('red');
            } else {
                clickedCell.classList.add('green');
            }


            previousCell = clickedCell;
        }
    });
});