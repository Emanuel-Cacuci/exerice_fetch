

 
// Requette Get
 
let div=document.querySelector('.phrase');
const list =document.querySelector('#liste-produits');
 
fetch('data.json')
.then(reponse => reponse.json())
.then(data => {
    console.log(data.produits);
 
    const product= data.produits
 
    console.log(product[2].nom)
    console.log(product[2].prix)
 
    const phrase=document.createElement('p');
    phrase.textContent= "nom "+product[2].nom + " " + "prix " + product[2].prix
 
    div.appendChild(phrase)
 
    for( let i=0; i<product.length; i++){
 
       const html1=`
 
        <div>
        <h3> ${product[i].nom} </h3>
        <p> ${product[i].prix} </p>
        <p> ${product[i].enStock} </p>
        <p> ${product[i].categories} </p>
        
        </div>
        
        `
 
         list.innerHTML +=html1
 
         list.innerHTML = list.innerHTML + html1
    }
 
    product.forEach(element => {
 
        const html=`
 
        <div>
        <h3> ${element.nom} </h3>
        <p> ${element.prix} </p>
        <p> ${element.enStock} </p>
        <p> ${element.categories} </p>
        
        </div>
        
        `
 
         list.innerHTML +=html
 
         list.innerHTML = list.innerHTML + html
 
    });
 

 
});
 