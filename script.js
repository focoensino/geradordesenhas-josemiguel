const inputPassword =document.querySelector('#password')
inputLength = document.querySelector('#password-length')
document.querySelector('#copy-1').addEventListener('click',copy)
document.querySelector('#copy-2').addEventListener('click',copy)

let inputlengthvalue =8

function generatepassword(){
const chars= "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"
let password = ""
for (let i=0; i<inputlengthvalue;i++) {
const randomNumber = Math.floor(Math.random()*chars.length)
password += chars.substring(randomNumber,randomNumber+1)


}
inputPassword.value = password
}

function copy () {
navigator.clipboard.writeText(inputPassword.value)
} 

inputLength.addEventListener('input',function(){
inputlengthvalue = inputLength.value
 generatepassword ()
console.log(inputlengthvalue )


})

generatepassword() 


