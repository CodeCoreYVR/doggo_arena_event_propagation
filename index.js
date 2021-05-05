//event handlers: functions that are called when events occur. 
//JS offers 3 ways to register events:

//1. Inline event listeners => <button onclick="doSomething()"></button>
//2. DOM event handlers => window.onload = () => {//window loaded} // mostly used when handling xhr requests
//3. Using addEventListener() => modern way and it allows us to register as many handlers as we need
// window.addEventListener( 'load', () => { //window loaded })

//Listening to events on the document itself
document.addEventListener('click', function(event) {
    console.log('document was clicked!')
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(this)
})

//Add eventListener to toxicTim when double clicked
const toxicTim = document.getElementById("toxic-tim")

toxicTim.addEventListener('dblclick', function() {
    console.log('Toxic Tim was clicked')
})

//Exercise: Clicking Titles
const allDoggos = document.querySelectorAll('.doggo');
allDoggos.forEach(dog => {
    dog.querySelector('h1').addEventListener('click', function() {
        console.log('doggo name clicked!')
    })
})

//To test if an object is an instance of a Node in order to prevent 
//adding eventListener to null, use instanceof
//document.querySelector("jgjhfgj") instanceof Node   => returns false