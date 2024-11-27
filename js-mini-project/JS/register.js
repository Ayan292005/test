let registerForm=document.querySelector(".reg-form")
let name=document.querySelector("#name")
let surname=document.querySelector("#surname")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let myURL="http://localhost:4000"

registerForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let newUser={
        name:name.value,
        surname:surname.value,
        email:email.value,
        password:password.value,
        isAdmin:false,
        favorites:[]
    }
    GetDatas(`${myURL}/users`)
.then(res=>{
    let users=res.datas
    let findedUser=users.find(user=>user.email==email.value)
    if(findedUser){
        alert("Bu email artiq qeydiyyatdan kecib")
    }else{
    PostData(`${myURL}/users`,newUser)
    .then(()=>{
        window.location.href="login.html"
    }) 
    }
})
})


async function GetDatas(url){
    let datas
    let error

   await axios.get(url)
    .then(res=>datas=res.data)
    .catch(err=>error=err)

    return{
        datas,
        error
    }
}

async function PostData(url,newData){
    let data
    let error

   await axios.post(url,newData)
    .then(res=>data=res.data)
    .catch(err=>error=err)

    return{
        data,
        error
    }
}