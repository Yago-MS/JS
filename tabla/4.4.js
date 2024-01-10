let cells = document.querySelectorAll("td");

cells.forEach(cell => {
    cell.addEventListener("click", function (event) {
        cells.forEach(cell => {
            if (cell.getAttribute("style") != null) {
                cell.removeAttribute("style");
            }
        });

        // Rows
        let trCurrent = cell.parentNode;
        let cellsCurrent = trCurrent.querySelectorAll("td");
        cellsCurrent.forEach(cell => {
            cell.style.backgroundColor = "lightgreen";
        });

        //Columns
        let columnIndex = cell.cellIndex; // Índice de la columna

        let table = trCurrent.parentNode; // Tabla seleccionada
        let filas = table.querySelectorAll("tr");
        filas.forEach(fila => {
            let cells = fila.querySelectorAll("td");
            cells[columnIndex].style.backgroundColor = "lightgreen";
        });

        document.querySelector("#data").innerHTML = `Column: ${cell.cellIndex + 1}. Row: ${cell.parentNode.rowIndex + 1}`;
        cell.style.backgroundColor = "green";
    
        if (event.ctrlKey) {
            cell.style.backgroundColor = "red";
        }

        if (event.shiftKey) {
            cell.style.backgroundColor = "blue";
        }

    });
    
});