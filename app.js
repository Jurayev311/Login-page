let formEl = document.querySelector("#form")
let loginEl = document.querySelector("#login")
let passEl = document.querySelector("#password")
let btnEl = document.querySelector("#btn")

btnEl.disabled = true

formEl.addEventListener("input", function() {
    if(loginEl.value.trim() && passEl.value.trim()) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
})

formEl.addEventListener('submit', function (e) {
    e.preventDefault()

    let correctLogin = "javohir"
    let correctPass = '3011'
    
    if(loginEl.value === correctLogin && passEl.value === correctPass) {
        window.location.href = "./result.html"
    } else {
        alert("Siz login yoki parolni xato kiritdingiz!")
    }

    loginEl.value = ""
    passEl.value = ""

    btn.disabled = true
})