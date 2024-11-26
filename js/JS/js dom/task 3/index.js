let form=document.querySelector(".form")

let box=document.querySelector(".box")

let input=document.querySelector(".input")

let btn=document.querySelector(".btn")


btn.addEventListener("click",(e)=>{
    e.preventDefault() 
    let p=document.createElement("p")
    p.className="text"
    
    let ckInput=document.createElement("input")
    ckInput.className="ck-box"
    ckInput.type="checkbox"
    
    let btn2=document.createElement("button")
    btn2.className="btn-2"
    btn2.textContent="Delete"
    
    let todo=document.createElement("div")
    todo.className="ToDo"
    
    todo.append(ckInput,p,btn2)
    
    form.appendChild(todo)

    let EmtyArr=[]

    if (input.value!=="") {
        todo.style.display="flex"
        p.textContent=input.value
        
    } else {
        alert("bosdur")

    }

    btn2.addEventListener("click",(e)=>{
        e.target.parentElement.remove()
        })
        
        ckInput.addEventListener("change",()=>{
        
        })
           
           input.value=""
})