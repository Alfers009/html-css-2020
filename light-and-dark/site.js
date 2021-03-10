document.querySelector("#switch")
.addEventListener("click", changeTheme)
function changeTheme () {
    let css = document.querySelector("#darkcss")
}

    css.disabled = !css.disabled ? false : true

    if(css.disabled) {
        css.disabled = false
    } else {
        css.disabled =true
    }

    switch (css.disabled) {
        case true:
            css.disabled = false
            break
        default:
            css.disabled =true
    }