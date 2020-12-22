










var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];
function loadData(){
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showMenu(){
    console.log('1. Show all students');
    console.log('2. Create a new students');
    console.log('3. Save and Exit');

    var option = readlineSync.question('> ');
    switch(option){
        case '1':
            showAllStudent();
            showMenu();
            break;
        case '2':
            addStudent();
            showMenu();
            break;
        case '3':
            saveAndClose();
            break;
        default:
            console.log('You got wrong number.')
            showMenu();
            break;
    }
}
function showAllStudent(){
    for (var student of students){
        console.log(student.name, student.age);
    }
}

function addStudent(){
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');
    var student = {
        name: name,
        age: parseInt(age)
    };
    students.push(student);
}

function saveAndClose(){
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json',content, {encoding: 'utf8'});
}

function main(){
    loadData();
    showMenu();
}
main();