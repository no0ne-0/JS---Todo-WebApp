const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask() {
    if (inputBox.value==='') {
        alert("You Must Enter A Value");
    }else{
        const li =document.createElement("li");
        li.innerText=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputBox.value='';
    saveData()
}
inputBox.addEventListener('keydown',(event)=>{
    if (event.key === 'Enter'){
        event.preventDefault();
             addTask();
    }
})
listContainer.addEventListener("click",(e)=>{
if (e.target.tagName==="LI") {
    e.target.classList.toggle("checked")
    saveData()
}
else if((e.target.tagName==="SPAN")){
    e.target.parentElement.remove();
    saveData()
}
},true)/*Event Listeners and Phases
When you click on something in a web page, like a button or a list item, the browser handles this action in different steps or "phases". There are two main phases where you can make the browser do something:

Capturing Phase: The event starts at the top (the whole web page) and moves down to the element you clicked.
Bubbling Phase: The event starts at the element you clicked and moves back up to the top (the whole web page).
Adding an Event Listener
When you use addEventListener to make something happen when you click an element, you can choose whether you want this to happen in the capturing phase or the bubbling phase. By default, it happens in the bubbling phase.

The false Parameter
When you add an event listener, the false parameter means you want the action to happen in the bubbling phase. This is usually what you want and is the default behavior.

Here's a simple way to think about it:

Bubbling Phase (false): The click starts at the element you clicked and then bubbles up to its parent elements. Imagine throwing a stone in water and the ripples go outwards.
Capturing Phase (true): The click starts from the top (the whole web page) and goes down to the element you clicked. Imagine pouring water from the top of a pyramid and it flows down.
Your Code*/
function saveData(){
    localStorage.setItem("Data",listContainer.innerHTML)
}
function showTask() {
    listContainer.innerHTML=localStorage.getItem("Data")
}
showTask();
