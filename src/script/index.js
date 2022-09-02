function botaoMenu(){
 let btnAbrir = document.querySelector(".btn__menu")
 let btnFechar = document.querySelector('.btn__close')
 let navMobile = document.querySelector('.nav__mobile')
 let inputMobile = document.querySelector('.input__mobile')
 let imgMobile = document.querySelector('.profile__mobile')
 let nameMobile = document.querySelector('.profile__name')

btnAbrir.addEventListener('click',()=>{
    btnFechar.classList.toggle('hidden')
    btnAbrir.classList.toggle('hidden')
    navMobile.classList.toggle('hidden')
    inputMobile.classList.toggle('hidden')
    imgMobile.classList.toggle('hidden')
    nameMobile.classList.toggle('hidden')
}
)
btnFechar.addEventListener('click',()=>{
    btnFechar.classList.toggle('hidden')
    btnAbrir.classList.toggle('hidden')
    navMobile.classList.toggle('hidden')
    inputMobile.classList.toggle('hidden')
    imgMobile.classList.toggle('hidden')
    nameMobile.classList.toggle('hidden')
}
)

}


botaoMenu()