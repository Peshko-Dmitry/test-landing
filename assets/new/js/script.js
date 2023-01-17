const services = document.querySelectorAll('.services-item')
const spiky = document.querySelectorAll('.spiky-list-item')

services.forEach(el =>{
    el.addEventListener('click',(e)=>{
    // el.addEventListener('mouseover',(e)=>{
        services.forEach(i =>{
            if(!i.classList.contains('inactive')){
                i.classList.add('inactive')
            }
        })
        el.classList.toggle('inactive')
    })
    
    
})
spiky.forEach(el =>{
    el.addEventListener('click',(e)=>{
    // el.addEventListener('mouseover',(e)=>{
        spiky.forEach(i =>{
            if(i.classList.contains('active')){
                i.classList.remove('active')
                // i.style.display = 'none'
                if(i.classList.contains('effects')){
                    document.querySelector('.spiky-block-list-info.effects').classList.remove('active')
                }
                if(i.classList.contains('lighting')){
                    document.querySelector('.spiky-block-list-info.lighting').classList.remove('active')
                }
                if(i.classList.contains('animation')){
                    document.querySelector('.spiky-block-list-info.animation').classList.remove('active')
                }
            }
        })
        el.classList.add('active')
        if(el.classList.contains('effects')){
            document.querySelector('.spiky-block-list-info.effects').classList.add('active')
        }
        if(el.classList.contains('lighting')){
            document.querySelector('.spiky-block-list-info.lighting').classList.add('active')
        }
        if(el.classList.contains('animation')){
            document.querySelector('.spiky-block-list-info.animation').classList.add('active')
        }
    })
    
    
})

let popupOpen = document.querySelectorAll('.popup-open')
let popup = document.querySelector('.popup')
let popupClose = document.querySelector('.close')

popupOpen.forEach((el)=>{
  el.addEventListener('click', ()=>{
    let video = popup.querySelector('.video')
    el.getAttribute('data-video')
    let src = 'https://www.youtube.com/embed/' + el.getAttribute('data-video')
    popup.style.display = 'flex'
    video.setAttribute('src', src)
    console.log(src)
  })
})
popupClose.addEventListener('click', ()=>{
  popup.style.display = 'none'
})


