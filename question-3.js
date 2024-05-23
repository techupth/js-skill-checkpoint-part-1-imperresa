// Question #3
let userPassword = "abcde";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword){
    let password = userPassword.length
    if(password <= 5){
        return "Weak"
    }if(password <= 9){
        return "Medium"
    }if(password >=10){
        return "Strong"
    }
}

console.log(checkPasswordStrength(userPassword)); 