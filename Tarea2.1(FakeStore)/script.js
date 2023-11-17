async function GetData(){
    try {
        const response = await fetch('https://fakestoreapi.com/products') // Promesa
        if(!response.ok){
            throw Error(response.status + ' ' + response.statusText)
        }

        return await response.json()
    } catch (error) {
        console.log(error)
    }

}

const cargarDatos = document.getElementById('cuerpo')
const prueba = document.getElementById('btnGetData')
let productos = []

window.addEventListener('load', async function() {
    productos =[]
    productos = await GetData()

    const section = document.getElementById('productos')

    let li =''
    let article = ''

    productos.forEach(producto => {
        const {title, description, price, rating, image} = producto
        const {rate} = rating

        article += `<article class="col"><div class="card text-center mb-3" style="width: 18rem;">
        <img src="${image}" class="card-img-top" style="height:300px; width:200">
        <div class="card-body">
          <h5 class="card-title">${title +' - ' + price}$</h5>
          <p class="card-text">${description}</p>
          <a href="#" class="btn btn-primary">Ver</a>
        </div>
        </div></article>`

    //     article+=`<article class="col-6"><div class="card mb-3" style="max-width: 600px;">
    //     <div class="row g-0">
    //       <div class="col-md-4">
    //         <img src="${image}" class="img-fluid rounded-start" style="height:300px; width:250">
    //       </div>
    //       <div class="col-md-8">
    //         <div class="card-body">
    //           <h5 class="card-title">${title +' - ' + price}$</h5>
    //           <p class="card-text">${description}</p>
    //           <p class="card-text"><small class="text-body-secondary">rating: ${rate}</small></p>
    //         </div>
    //       </div>
    //     </div>
    //   </div></article>`

    section.innerHTML = article
    });
})

function Prueba(){
    fetch('https://fakestoreapi.com/products')

    .then((response)=>{
        if (!response.ok) {
            ///generar un error
            throw Error(response.status + ' ' + response.statusText)
        }
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    }).catch((error) => {
            console.log(error)
        })
}

Prueba()