class Human {
	constructor(name){
		this.name = name;
	}

	toString() {
		return "hello " + this.name;
	}
}

class Person extends Human{
	constructor(name,age){
		super();
		super.constructor(name);
		this.age = age;
	}
	toString(){
		return super.toString() + " I am a person & my age is "+ this.age;
	}
}

class Child extends Person{

	constructor(name,age){
		super();
		super.constructor(name,age);
	}

	toString(){
		return super.toString() + " I think I am a child";
	}
}

var me = new Child('kunal',25);
console.log(me.toString());