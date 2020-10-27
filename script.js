// Current Date and Time
var timeBlock = document.querySelector('.container')

// var date = new Date();

var date = moment().format('MMMM Do YYYY, h:mm:ss a');
// while loop to append every 1000ms?
// how to display current time without refresh?


var time = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

document.getElementById("currentDay").innerHTML = date;


// i want to make a statement that 


// for loop to create each timeblock
for (var i = 0; i < time.length; i++) {
    var timeDiv = document.createElement("div")
    timeDiv.classList.add('row')
    var timeblockDiv = document.createElement("div")
    timeblockDiv.classList.add('col-lg-3')
    var textArea = document.createElement("textarea")
    textArea.classList.add("col-lg-6")
    var button = document.createElement("button")
    button.classList.add('col-lg-3')

    timeblockDiv.textContent = time[i]
    timeblockDiv.classList.add("hour")

    // timeDiv.appendChild(timeblockDiv)
    
    timeblockDiv.appendChild(textArea)

    button.innerHTML = "save"
    button.classList.add("saveBtn")
    button.setAttribute("id", time[i])

    timeblockDiv.appendChild(button)

    timeDiv.classList.add("row")

    timeBlock.appendChild(timeblockDiv)

    timeblockDiv.classList.add("row", "time-block")
 }

 document.querySelector(".saveBtn").addEventListener("click", function(event){
    console.log(event)
 })
 
 var saveButtons = document.querySelectorAll(".saveBtn")

 for(var i = 0; i < saveButtons.length; i++) {
   (saveButtons[i]).addEventListener("click", function(event){
       console.log(event.target.id)
       console.log(event.target.previousSibling.value)
       localStorage.setItem(event.target.id, event.target.previousSibling.value)
        })}

    //    page loads, start first forloop 9-7
    // insdie use localstorage.getitem = key of item
    // i+ am/pm
    // or remove am/pm
    // @39
    // moment() if current time < array time (IF STATEMENT)
    // apply class to element = textArea