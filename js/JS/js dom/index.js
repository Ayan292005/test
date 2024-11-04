let box=document.querySelector(".box")

let button=document.querySelector(".btn")

let countClick=document.querySelector(".null")

let input=document.querySelector(".input")

let button2=document.querySelector(".copyBtn")

let count=0

let CurrentColor;

function randomColor() {
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
}
button.addEventListener("click", function () {
    let CurrentColor=randomColor()
   
    button.style.color=CurrentColor

    button.style.borderColor=CurrentColor

    box.style.backgroundColor=CurrentColor

     count+=1
     countClick.textContent=count
    input.value=CurrentColor

})
button2.addEventListener ("click", function () {
    navigator.clipboard.writeText( CurrentColor);
  
    alert("Copied the text: " +  CurrentColor);
  
})