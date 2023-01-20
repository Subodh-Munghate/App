//  const button = document.querySelectorAll(".btn")
// const cal =  document.getElementById(".operation")


let screen = document.getElementById("display")
let buttons = document.querySelectorAll(".btn")

buttons.forEach((button) => {
    button.addEventListener("click",(e) =>{
        let value = e.target.dataset.num ;
        console.log(value);
        screen.value += value ;
    })
})