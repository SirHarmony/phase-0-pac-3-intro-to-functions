// Follow along with the examples here
function doNothing() {}

function sayHello(){
  console.log("Hello!")
}

sayHello()

function sayHelloToGuadalupe() {
  console.log("Hello, Guadalupe!")
}

sayHelloToGuadalupe()

function add(x,y) {
  return x+y;
}

console.log(add(1,2))

function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}
