//event handlers: functions that are called when events occur. 
//JS offers 3 ways to register events:

//1. Inline event listeners => <button onclick="doSomething()"></button>
//2. DOM event handlers => window.onload = () => {//window loaded} // mostly used when handling xhr requests
//3. Using addEventListener() => modern way and it allows us to register as many handlers as we need
// window.addEventListener( 'load', () => { //window loaded })

//Listening to events on the document itself
document.addEventListener('click', function(event) {
    // console.log(event)
    console.log('document was clicked!')
    // console.log(event.target) //event.target is the node that triggered the event

    //Remember that currentTarget is not available to the event object other that the instance
    //when the event is triggered.  To save its value you will need to grab it like this:
    // my_currentT = event.currentTarget
    // console.log(my_currentT)

    // console.log(event.currentTarget) // event.currentTarget is the node that owns the event i.e. the Node that .addEventListener was called on
    // console.log(this)
})

//Notes on currentTarget:
//See that currentTarget cannot be used asynchronously:
    /* See that currentTarget is null when you look at the event object's properties.  It is only available in the instance of triggering the event, 
        and not afterwards. Event is like a live thing.  Immediately when the event happens, currentTarget exists, but as soon as the next thing happens 
        (like console.log) it is no longer current.
        Example, when you have console.log(event.currentTarget) => in this moment you can do something with that currentTarget
        But if you console.log(event) after, it won’t be there anymore
        So, if you want to use it, use it immediately and not in something asynchronous.
        You can save the value of currentTarget by declaring a variable, though.
    */

//Notes on "this":
    /*"this" refers to currentTarget.  However, be careful when using arrow functions with eventListeners!!
        The value of “this” depends on the context of where you’re using it. In our current eventListener with the callback 
        function, our “this” refers to the currentTarget.  However, if you use an arrow function, the behaviour of arrow 
        functions means that it will bind the value of “this” to its current context.  
        So, if you use an arrow function with addEventListener, this will not be currentTarget 
        anymore, it’s probably going to be the node of Window.
    */

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
//toxicTim instancof Node => returns true

//Exercise: Clicks, Events and Properties
toxicTim.addEventListener('click', function(event) {
    // console.log(event.target) //either ToxicTim div or h1 tag sityting on top of it
    // console.log(event.currentTarget) //also ToxicTim because the listener is registered on this node
    // console.log(event.clientX, event.clientY) //gives the x and y position that was clicked on. the numbers refers to the pixels and will be different on the browser you're using
})

const TeamSalmon = document.querySelector('.team.salmon')
TeamSalmon.addEventListener('click', function(){
    // console.log(this)
})

//Exercise: Last in queue

//1. grab all doggos
allDoggos.forEach((dogNode) => {
    //2 loop through add event
    dogNode.addEventListener('click', function(event) {
        const dogN = event.currentTarget
        const rosterN = dogN.parentElement
        rosterN.appendChild(dogN) //should shift child to end of roster
    })
})

document.querySelectorAll('.doggo.fighter').forEach(doggoNode => {
    //dblclick
    doggoNode.addEventListener("dblclick", function(event) {
        console.log(`${event.currentTarget.id} was double clicked!`);
        event.currentTarget.classList.toggle("inverted");
        console.log("event: ", event)
    })

    //mousedown
    doggoNode.addEventListener("mousedown", function(event) {
        event.currentTarget.classList.add("flipped");
    })

    //mouseup
    doggoNode.addEventListener("mouseup", function(event) {
        event.currentTarget.classList.remove("flipped");
    })

    //mouseleave
    doggoNode.addEventListener("mouseleave", function(event) {
        event.currentTarget.classList.remove("flipped");
    })

})


//Typing loudly
const random = n => Math.ceil(Math.random() * n);
console.log(random)

const keySound = () => new Audio(`sounds/vintage-keyboard-${random(5)}.wav`);
console.log(keySound)
document.querySelectorAll("input").forEach(inputNode => {
    inputNode.addEventListener("input", function(event) {
        keySound().play();
    })
})

const explosionSound = () => new Audio("sounds/small-explosion.wav")
document.querySelector("form").addEventListener('submit', function(event){
    event.preventDefault();
    explosionSound().play();
});

//Add Applicant Avatar
const applicantPreview = document.querySelector(
    "#applicant-preview .doggo.blank"
)

document
    .querySelector(`input[name="picture-url"]`)
    .addEventListener("input", function(event){
        event.preventDefault();
        const imageUrl = event.currentTarget.value;
        console.log("imageUrl: ", imageUrl);
        applicantPreview.style.backgroundImage = `url(${imageUrl})`;
    })

//Shortcut of the ninja
let lettersTyped = "";
document.addEventListener("keypress", function(event){
    lettersTyped += event.key;
    const lastFiveLettersTyped = lettersTyped.slice(lettersTyped.length - 5);
    if (lastFiveLettersTyped === "panic" ){
        window.location.replace("http://hackertyper.net")
    }
})

document.addEventListener("keydown", function(event){
    console.log(event);
    const {
        currentTarget,
        target,
        keyCode,
        altKey,
        shiftKey,
        metaKey,
        key
    } = event;

   

    if (altKey && shiftKey && keyCode === 73) {
        window.location.href = "http://nyan.cat";
    }
})




