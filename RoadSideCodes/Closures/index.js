// https://roadsidecoder.hashnode.dev/closures-javascript-interview-questions

function foo() {
    var name = "Roadside Coder"; // name is a local variable created by foo
    function displayName() {
        // A Closure // displayName() is the inner function
        alert(name); // variable used which is declared in the parent function
    }
    displayName();
}
foo();
