const btn = document.getElementById('btn')
const container = document.getElementById('container')




// btn.addEventListener('click',()=>{
//     const daire = document.createElement('div')


//     daire.classList.add('daire')


//     container.append(daire)

// })



btn.addEventListener('click',()=>{
    const daire = document.createElement('div')
    const goz1 = document.createElement('div')
    const goz2 = document.createElement('div')


    daire.classList.add('daire')
    goz1.classList.add('goz1')
    goz2.classList.add('goz2')



    daire.append(goz1)
    daire.append(goz2)
    container.append(daire)

})

