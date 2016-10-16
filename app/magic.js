var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = "toto"; }
        console.log("Hello " + message);
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething("Jules");
//# sourceMappingURL=magic.js.map