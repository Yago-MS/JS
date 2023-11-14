document.addEventListener('DOMContentLoaded', function () {
    let clickTracker = {
        clicks: [],
        previousCell: null,
        addClick: function (row, column, color) {
            this.clicks.push({
                row: row,
                column: column,
                color: color
            });
        },
        displayClicks: function () {
            console.log(this.clicks);
        }
    };

    let table = document.getElementById('clickTable');
    table.addEventListener('click', function (event) {
        let cell = event.target;
        let row = cell.parentElement.rowIndex;
        let column = cell.cellIndex;


        if (clickTracker.previousCell) {
            clickTracker.previousCell.style.backgroundColor = '';
        }


        if (event.ctrlKey) {
            cell.style.backgroundColor = 'red';
            clickTracker.addClick(row, column, 'red');
        } else if (event.shiftKey) {
            cell.style.backgroundColor = 'blue';
            clickTracker.addClick(row, column, 'blue');
        } else {
            cell.style.backgroundColor = 'green';
            clickTracker.addClick(row, column, 'green');
        }


        clickTracker.previousCell = cell;


        clickTracker.displayClicks();
    });
})