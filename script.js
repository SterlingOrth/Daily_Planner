// Current Date and Time
var timeBlock = document.querySelector('.container')






var date = new Date();
// while loop to append every 1000ms?
// how to display current time without refresh?


var time = ["9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7"]

document.getElementById("currentDay").innerHTML = date;

// varibles


// i want to make a statement that 


// for loop to create each timeblock
for (var i = 0; i < time.length; i++) {
    var timeDiv = document.createElement("div")
    var timeblockDiv = document.createElement("div")
    var textArea = document.createElement("textarea")
    var button = document.createElement("button")

    timeblockDiv.textContent = time[i]

    timeblockDiv.classList.add("row", "time-block")

    timeDiv.appendChild(timeblockDiv)

    textArea.classList.add("description")

    timeblockDiv.appendChild(textArea)

    button.innerHTML = "save"

    button.classList.add("saveBtn")

    timeblockDiv.appendChild(button)

    timeDiv.classList.add("row")

    timeBlock.appendChild(timeblockDiv)
 }


// // if statement for color change depending on time
//   if () {


//   } else if {


//   } else {


//   }