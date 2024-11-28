let loginForm=document.querySelector(".login-form")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let myURL="http://localhost:4000"

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    GetDatas(`${myURL}/users`)
    .then((res)=>{
        let users=res.datas
        let findedUser= users.find(user=> user.email==email.value && user.password==password.value)
        let wrongPassword= users.find(user=> user.email==email.value && user.password!=password.value)
        let wrongEmail= users.find(user=> user.email!=email.value && user.password==password.value)
        let allWrong= users.find(user=> user.email!=email.value || user.password!=password.value)
       if(findedUser){
          localStorage.setItem("userId",JSON.stringify(findedUser.id))
          window.location.href="index.html"
       }else if(wrongPassword){
          alert("password is invalid")
       }else if(wrongEmail){
        alert("email is invalid")
       }else if(allWrong){
        alert("email or password is invalid")
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