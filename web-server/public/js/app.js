fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?address=').then((res)=>{
    res.json().then((data)=>{
        console.log(data)
    })
})


const weatherForm = document.querySelector('form')
weatherForm.addEventListener('submit',()=>{
    console.log('Testing!')
})