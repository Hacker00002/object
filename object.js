const allObj = document.querySelector('.all__objects')
const inputForm = document.querySelector('form')
const inputAll = document.querySelector('.all')

const inputImg = document.querySelector('#inputImg')
const inputName = document.querySelector('#inputName')
const inputAbout = document.querySelector('#inputAbout')
const inputAge = document.querySelector('#inputAge')
const inputEmail = document.querySelector('#inputEmail')

inputForm.addEventListener('submit', function(e){
    e.preventDefault()

    if(inputImg.value == ''){
        div.textContent = ""
    }

    


    function allObjects(){
        const product = {
            img: `${inputImg.value}`,
            name: `Name:${inputName.value}`,
            about: `About:${inputAbout.value}`,
            age: `Age:${inputAge.value}`
        }
    
        const div = document.createElement("div")
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const aboutYour = document.createElement('h3')
        const h4 = document.createElement('h4')
        const textS = document.createElement('h3')
        
        div.style.backgroundColor = 'rgba(0, 0, 0, 0.142)'
        div.style.padding = '30px'
        div.style.borderRadius = '15px'
    
        img.src = product.img
        h3.textContent = product.name
        aboutYour.textContent = product.about
        h4.textContent = product.age
    
        div.appendChild(img)
        div.appendChild(h3)
        div.appendChild(aboutYour)
        div.appendChild(h4)
        div.appendChild(textS)
        
        allObj.appendChild(div)
    }
    allObjects()
    inputAll.style.overflowY = 'scroll'
})