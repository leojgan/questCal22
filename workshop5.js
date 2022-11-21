class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getInfo() {
        console.log(`Name: ${this.name}  Email: ${this.email}`);
    }
};

class Bootcamp {
    constructor(courseName, courseLevel, studentRoster = []) {
        this.courseName = courseName;
        this.courseLevel = courseLevel;
        this.studentRoster = studentRoster;
    }
    getInfo() {
        console.log(`${this.courseName}, ${this.courseLevel} Level`);
    }
    listStudentRoster() {
        if(!this.studentRoster.length) {
            console.log(`No students are currently registered for the ${this.courseName} bootcamp.`);
            return false;
        } else {
            console.log(`The students registered for the ${this.courseName} bootcamp are: `);
            this.studentRoster.forEach(line => console.log(`Name: ${line.name}  Email: ${line.email}`));
            return true;
        }
    }
    registerStudent(newStudent) {
        if (!newStudent.name || !newStudent.email) {
            console.log("ERROR: Invalid student name or email address.");
            return false;
        }
        if (this.studentRoster.find(student => student.email === newStudent.email)){
            console.log("This email is already registered to this course.");
            return false;
        }
        this.studentRoster.push(newStudent);
        console.log(`${newStudent.name} has successfully been added to the ${this.courseName} course.`);
        return true;
    }
    removeStudent(email) {
        const removal = this.studentRoster.find(student => student.email === email);
        const newRoster = this.studentRoster.filter(student => student.email !== email);
        if (!removal) {
            console.log(`${email} was not a valid email for this course.`);
        } else {
            this.studentRoster = newRoster;
            console.log(`${removal.name} has been successfully removed from this course.`);
        }
    }
};

// TASK 1 TEST
bunnyBugs = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(bunnyBugs);
if (bunnyBugs.name === 'Bugs Bunny' && bunnyBugs.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
};

// TASK 2 TEST
reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.courseName === 'React' && reactBootcamp.courseLevel === 'Advanced'
        && Array.isArray(reactBootcamp.studentRoster) && reactBootcamp.studentRoster.length === 0) {
    console.log('TASK 2: PASS');
};

// TASK 3 TEST
// const runTest = (bootcamp, student) => {
//     const attemptOne = bootcamp.registerStudent(student);
//     const attemptTwo = bootcamp.registerStudent(student);
//     const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny", "babs@bunny.com"));
//     if ( attemptOne && !attemptTwo && !attemptThree) {
//         console.log("TASK 3: PASS");
//     }
// };

// TASK 4 TEST
const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudentRoster()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.studentRoster = [];
    if (!bootcamp.listStudentRoster()) {
        console.log("TASK 4: PASS 2/2");
    }
};

runTest(reactBootcamp, bunnyBugs);

reactBootcamp.registerStudent(bunnyBugs);
reactBootcamp.registerStudent(new Student("Babs Bunny", "babs@bunny.com"));

// BONUS TASKS
reactBootcamp.getInfo();

reactBootcamp.removeStudent("daffy@duck.com");
reactBootcamp.registerStudent(new Student("Daffy Duck", "daffy@duck.com"));
console.log(reactBootcamp.studentRoster);
reactBootcamp.removeStudent("daffy@duck.com");
console.log(reactBootcamp.studentRoster);

bunnyBugs.getInfo();