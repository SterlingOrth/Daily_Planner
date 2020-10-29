// Current Date and Time
var timeBlock = document.querySelector('.container')


// Date variable stored in global memory
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("currentDay").innerHTML = date;

// currentTime = moment().format('h'); 
// // how to target ??
// if (currentTime == moment().hour()) {
//     document.classList.add("present")
// } else if (currentTime < moment().hour()) {
//     document.classList.add("past")
// } else if (currentTime > moment().hour()) {
//     document.classList.add("future")
// }

var time = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]





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