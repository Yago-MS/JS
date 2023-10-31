let students = {
    "students": [
        {
            registrationNum:"S01",
            name: "Jon Doe",
            age: 21,
            emancipated: true,
            photo: "jon.jpg",
            previousGrades: [7, 8, 10]
        },
        {
            registrationNum:"S02",
            name: "Joe Foo",
            age: 18,
            emancipated: false,
            photo: "",
            previousGrades: [7, 6, 6]
        },
        {
            registrationNum:"S03",
            name: "Jane Bar",
            age: 20,
            emancipated: false,
            previousGrades: []
        }]
};

let estudiantes = document.getElementById("estudiantes");
let studentset = students.students;
let p = document.createElement("p");
for (let i = 0; i < studentset.length; i++) {
    p.append(studentset[i].toString() + "<br>");
}

estudiantes.append(p);