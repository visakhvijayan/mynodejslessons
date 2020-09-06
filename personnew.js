console.log(__dirname);
console.log(__filename);

class Person {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am a ${this.job}`);
  }
}

module.exports = Person;
