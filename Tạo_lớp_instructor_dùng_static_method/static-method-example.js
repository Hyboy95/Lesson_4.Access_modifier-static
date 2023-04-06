class Instructor {
    constructor({name, role= 'assistant'} = {}) {
        this.name = name;
        this.role = role;
    }
    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }
    static helloWorld() {
        console.log('Hi there');
    }

    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }
}

let juniorInstructor = new Instructor({name:'Toan'});
let seniorInstructor = new Instructor({name: 'Truong', role: 'classroom'});
juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
Instructor.helloWorld();
console.log(`${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`);
console.log(`${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`);