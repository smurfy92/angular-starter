class Greeter{
	saySomething(message:string = "toto"){
		console.log("Hello " + message);
	}
}

var greeter = new Greeter();
greeter.saySomething("Jules");