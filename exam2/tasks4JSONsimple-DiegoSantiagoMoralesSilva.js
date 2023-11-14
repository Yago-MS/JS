const tasksAll =
    {
        "tasksList": [
            {
                "assignedTo": "Jon",
                "task": "Task_1",
                "duration": 120,
                "break": 5
            },
            {
                "assignedTo": "Doe",
                "task": "Task_2",
                "duration": 15,
                "break": 3
            },
            {
                "assignedTo": "Foo",
                "task": "Task_3",
                "duration": 60,
                "break": 15
            },
            {
                "assignedTo": "Jan",
                "task": "Task_4",
                "duration": 60,
                "break": 15
            },
            {
                "assignedTo": "Bar",
                "task": "Task_5",
                "duration": 60,
                "break": 15
            },
            {
                "assignedTo": "Fell",
                "task": "Task_6",
                "duration": 60,
                "break": 15
            }

        ]
    };

//para hacer los tests necesarios voy a interpretar los tiempos facilitados como segundos;
let tasks = tasksAll.tasksList;
let date = new Date(0);
let nowTime = new Date();
let start = false;
let taskTimers = [];
let taskBreaks = [];

for (const task of tasks) {
    taskTimers.push(task.duration);
    taskBreaks.push(task.break);
}


function convertMsToMMSS(ms) {
    let seconds = Math.floor(ms / 1000)
    let minutes = Math.floor(seconds / 60)

    seconds = seconds % 60
    minutes = minutes % 60

    return `${minutes}:${seconds}`
}

function stop() {
    showTasks();
    start = false;
    taskBreaks = [];
    taskTimers = [];
    date = new Date(0);
    for (const task of tasks) {
        taskTimers.push(task.duration);
        taskBreaks.push(task.break);
    }
}

function timer(nowTime, hours = 0, minutes = 0, seconds = 0) {

    let totalTime = (((hours * 60 + minutes) * 60) + seconds) * 1000;
    totalTime -= 1000;

    return convertMsToMMSS(totalTime)

}


setInterval(() => {
    if (start) {
        let chrono = document.getElementById("global-counter");
        chrono.innerText = convertMsToMMSS(date);
        date = new Date(date.getTime() + 1000);

    }
}, 1000);


setInterval(() => {
    if (start) {
        let timers = document.querySelectorAll(".taskTime")
        let i = 0;
        for (const time of timers) {
            if (time.innerText !== "0:0" && time.innerText !== "done") {
                time.innerText = timer(nowTime, 0, 0,taskTimers[i]);
                taskTimers[i] -= 1;
            } else {
                time.innerText = "done";
                time.parentElement.parentElement.classList.remove("doing");
                time.parentElement.parentElement.classList.add("done");
            }
            i++;
        }
        i = 0
    }
}, 1000);


setInterval(() => {
    if (start) {
        let breaks = document.querySelectorAll(".taskBreak")
        i = 0;
        for (const time of breaks) {
            if (time.innerText !== "0:0" && time.innerText !== "time's up" && taskTimers[i] === 0) {
                time.innerText = timer(nowTime, 0, 0, taskBreaks[i]);
                taskBreaks[i] -= 1;
            } else if (time.innerText === "0:0") {
                time.innerText = "time's up";
                time.parentElement.parentElement.classList.remove("done");
                time.parentElement.parentElement.classList.add("timeup");
            }
            i++;
        }
        i = 0
    }
}, 1000);

function showTasks() {
    let taskDiv = document.getElementById("tasks");
    taskDiv.innerText = "";
    for (const task of tasks) {
        let thisTask = document.createElement("div");
        thisTask.classList.add("doing");
        thisTask.innerHTML = `<h3>${task.assignedTo}</h3>`
        thisTask.innerHTML += `<p>${task.task}  <span class="taskTime">${task.duration}</span> <span class="taskBreak">${task.break}</span></p>`
        taskDiv.append(thisTask);
    }
}

window.onload = function () {

    showTasks();

}

