document.querySelector(".container").addEventListener("click", () =>{
    console.log("container clicked")
})

document.querySelector(".outside").addEventListener("click", () =>{
    console.log("outsider clicked")
})

document.querySelector(".inside").addEventListener("click", () =>{
    console.log("insider clicked")
},true); //this is event Capturing

document.querySelector(".btn").addEventListener("click", () =>{
    console.log("button clicked")
})