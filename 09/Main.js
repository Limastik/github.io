class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  sayHello() {
      console.log(`Привіт! Мене звуть ${this.name}, і мені ${this.age} років.`);
  }
}

const john = new Person("John", 30);
john.sayHello();

class Student extends Person {
  constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
  }

  study() {
      console.log(`${this.name} (ID: ${this.studentId}) навчається.`);
  }
}

const studentJohn = new Student("John", 30, "S12345");
studentJohn.sayHello();
studentJohn.study();
