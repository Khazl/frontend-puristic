class App {
  constructor(name) {
  	this.name = name;
  }

  greeting() {
  	return 'Hi ' + this.name;
  }
}

let app = new App('Jon Doe');
console.log(app.greeting());