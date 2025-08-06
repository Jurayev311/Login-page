let formEl = document.querySelector("#form")
let loginEl = document.querySelector("#login")
let passEl = document.querySelector("#password")
let btnEl = document.querySelector("#btn")
let errorEl = document.querySelector("#error")
let resultEl = document.querySelector("#result")

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
    let correctPass = '8060'
    
    if(loginEl.value === correctLogin && passEl.value === correctPass) {
        resultEl.style.display = 'block'
        window.location.href = "./result.html"

        setTimeout(() => {
            resultEl.style.display = 'none'
        }, 3000)
    } else {
        errorEl.textContent = "Siz login yoki parolni noto'g'ri kiritdingiz!"
        errorEl.style.display = 'block'

        setTimeout(() => {
            errorEl.style.display = 'none'
        }, 3000)
    }

    loginEl.value = ""
    passEl.value = ""

    btn.disabled = true
})