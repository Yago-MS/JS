let names = [];
$(document).ready(function () {

    function setCont(cont) {
        while (localStorage.getItem(cont)) {
            cont++;
        }
        return cont;
    }
    function loadTable(name = "") {
        let pendingTasks = 0;
        $("#tasks").empty();
        taskKeys = Object.keys(localStorage);
        for (let i = 0; i < taskKeys.length; i++) {
            let task = localStorage.getItem(taskKeys[i])
            task = task.trim()
            let taskData = task.split(' ');
            if (taskData[0].replace(/[-]/g, " ").includes(name) || taskData[0].replace(/[-]/g, " ") === name) {
                $("#tasks").append(`<tr class="completed-${taskData[4]}" id="${taskKeys[i]}"></tr>`)
                if(!names.includes(taskData[0].replace(/[-]/g, " "))){
                    names.push(taskData[0].replace(/[-]/g, " "));
                }
                for (const taskDatum of taskData) {
                    if (taskDatum !== "true" && taskDatum !== "false") {
                        if (taskDatum === taskData[2]) {
                            $(`#${taskKeys[i]}`).append(`<td><select id="prior-${taskKeys[i]}">
                                                            <option value="low" ${taskDatum === "low" ? "selected" : ""}>low</option>
                                                            <option value="normal" ${taskDatum === "normal" ? "selected" : ""}>normal</option>
                                                            <option value="high" ${taskDatum === "high" ? "selected" : ""}>high</option>
                                                         </select></td>`)
                        } else {
                            $(`#${taskKeys[i]}`).append(`<td>${taskDatum.replace(/[-]/g, " ")}</td>`)
                        }
                    } else {
                        taskDatum == "false" ? pendingTasks++ : "";
                        $(`#${taskKeys[i]}`).append(`<td><input type="checkbox" id="${taskData[0]}-${taskKeys[i]}" ${taskDatum === "true" ? "checked" : ""}></td>`)
                    }
                }
                $(`#${taskKeys[i]}`).append(`<td><button id="del-${taskKeys[i]}" value="${taskKeys[i]}">delete</button>`);

                $(`#del-${taskKeys[i]}`).on('click', function (ev) {
                    localStorage.removeItem(ev.target.value);
                    window.location.reload();
                })

                $(`#prior-${taskKeys[i]}`).on('change', function (ev) {

                    taskData[2] = $(`#prior-${taskKeys[i]}`).val();

                    localStorage.setItem(`${ev.target.parentElement.parentElement.id}`, `${taskData[0]} ${taskData[1]} ${taskData[2]} ${taskData[3]} ${taskData[4]} ${taskData[5]}`)
                    window.location.reload()
                })

                $(`#${taskData[0]}-${taskKeys[i]}`).on('click', function (ev) {
                    if (taskData[4] === "true") {
                        taskData[4] = "false"
                    } else {
                        taskData[4] = "true"
                    }
                    console.log(taskData)
                    localStorage.setItem(`${ev.target.parentElement.parentElement.id}`, `${taskData[0]} ${taskData[1]} ${taskData[2]} ${taskData[3]} ${taskData[4]} ${taskData[5]}`)
                    //window.location.reload()
                })
            }
        }
        $("#pending").text(`Pending tasks: ${pendingTasks}`)
    }

    loadTable()
    $("#inputFilter").autocomplete({
        source: names
    });

    $("#completionDate").datepicker();

    $("#createBtn").on('click', function (event) {
        event.preventDefault();
        let cont = setCont(0);
        let name = $("#name").val();
        let description = $("#description").val();
        let priority = $("#priority").val();
        let creation = new Date().toLocaleDateString()
        let completed = false;
        let completionDate = $("#completionDate").val();
        name = name.replace(/\s/g, "-")
        description = description.replace(/\s/g, "-")
        localStorage.setItem(`${cont}`, `${name} ${description} ${priority} ${creation} ${completed} ${completionDate}`);
        animateTask(localStorage.getItem(cont), cont);
    })

    function animateTask(task, id) {
        task = task.trim()
        let taskData = task.split(' ');
        $("#tasks").append(`<tr id="${id}" class="preTask completed-${taskData[4]}"></tr>`)
        for (const taskDatum of taskData) {
            if (taskDatum !== "true" && taskDatum !== "false") {
                $(`#${id}`).append(`<td>${taskDatum.replace(/[-]/g, " ")}</td>`)
            } else {
                $(`#${id}`).append(`<td><input type="checkbox" id="${taskData[0]}-${id}" ${taskDatum === "true" ? "checked" : ""}></td>`)
            }
        }
        $(`#${id}`).append(`<td><button id="del-${id}" value="${id}">delete</button>`);

        $(`#${id}`).animate({
            opacity: 100
        }, 10000);
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }

    $("#submitFilter").on('click', function (ev) {
        ev.preventDefault()
        loadTable($("#inputFilter").val())
    })
    $("#deleteAll").on('click', function () {
        localStorage.clear();
        window.location.reload()
    })
})