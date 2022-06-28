window.onkeydown = function(event) {
    if (event.keyCode == 32) {

let userInput = prompt("What would you like to do?");
const todoList = [];

while(userInput !== 'quit' ) {
    if(userInput === "list") {
         console.log("##############");
        
        for(let i=0; i<todoList.length; i++){
         console.log(`${i}: ${todoList[i]}`)
         }
         console.log("##############")
    }

        else if(userInput=== "new") {
         userInput=prompt("What would you want to do?");
         todoList.push(userInput)
         console.log(`${userInput} added to list`)
        }
        else if(userInput==="delete") {
         let del = parseInt(prompt("Please enter index of element you want to delete"))
        if(!Number.isNaN(del) && del<todoList.length) {
         let deletedStuff = todoList.splice(del, 1)
         console.log(`Task ${deletedStuff} deleted`)
        }
    
        else prompt("Unknown index")
        }
        userInput = prompt("What would you like to do?")
        }
if(userInput==="quit") {console.log("You succesfully quitted the app")}
}
}


