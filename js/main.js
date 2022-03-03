// BURGER MENU 
const burgerBtn = document.querySelector('.header .toggler');
const headerMenu = document.querySelector('.header .menu');

burgerBtn.addEventListener('click',() =>{
    burgerBtn.classList.toggle('active')
    headerMenu.classList.toggle('active')    
})

// TABS
const tabBtn = document.querySelectorAll('.tab-nav .btn')
const tabContent = document.querySelectorAll('.tab-content .content')

const removeTabActives = () =>{
    for(let i = 0; i< tabBtn.length; i++ ){
        tabBtn[i].classList.remove('active')
        tabContent[i].classList.remove('active')        
    }
}

tabBtn.forEach((btn, index) => {
    btn.addEventListener('click' , () => {
        removeTabActives()
        btn.classList.add('active')
        tabContent[index].classList.add('active')
    })
})