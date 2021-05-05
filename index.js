//event handlers: functions that are called when events occur. 
//JS offers 3 ways to register events:

//1. Inline event listeners => <button onclick="doSomething()"></button>
//2. DOM event handlers => window.onload = () => {//window loaded} // mostly used when handling xhr requests
//3. Using addEventListener() => modern way and it allows us to register as many handlers as we need
// window.addEventListener( 'load', () => { //window loaded })

//Listening to events on the document itself
document.addEventListener('click', function(event) {
    // console.log(event)
    // console.log('document was clicked!')
    // console.log(event.target)

    //Remember that currentTarget is not available to the event object other that the instance
    //when the event is triggered.  To save its value you will need to grab it like this:
    // my_currentT = event.currentTarget
    // console.log(my_currentT)

    // console.log(event.currentTarget)
    // console.log(this)
})

//Add eventListener to toxicTim when double clicked
const toxicTim = document.getElementById("toxic-tim")

toxicTim.addEventListener('dblclick', function() {
    // console.log('Toxic Tim was clicked')
})

//Exercise: Clicking Titles
const allDoggos = document.querySelectorAll('.doggo');
allDoggos.forEach(dog => {
    dog.querySelector('h1').addEventListener('click', function() {
        // console.log('doggo name clicked!')
    })
})

//To test if an object is an instance of a Node in order to prevent 
//adding eventListener to null, use instanceof
//document.querySelector("jgjhfgj") instanceof Node   => returns false

//Exercise: Clicks, Events and Properties
toxicTim.addEventListener('click', function(event) {
    console.log(event.target) //either ToxicTim div or h1 tag sityting on top of it
    console.log(event.currentTarget) //also ToxicTim because the listener is registered on this node
    console.log(event.clientX, event.clientY) //gives the x and y position that was clicked on. the numbers refers to the pixels and will be different on the browser you're using
})

const TeamSalmon = document.querySelector('.team.salmon')
TeamSalmon.addEventListener('click', function(){
    console.log(this)
})