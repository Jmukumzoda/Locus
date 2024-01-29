let menu = document.querySelector('.menu')
let asside = document.querySelector('aside')
let ul_li = document.querySelector('.ul_li2')
let exitBtn = document.querySelector('.exit-btn')

menu.onclick = () => {
    if (asside.style.right === '0%') {
        asside.style.right = '-100%'
    }else{
        asside.style.right = '0%'
    }
}
exitBtn.onclick = () => {
    asside.style.right = '-100%'
}