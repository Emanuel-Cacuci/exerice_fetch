fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))



// syntaxe avec async/await

//  en Js une function asynchone est une function déclaré avec le mot clé async qui permet d'utiliser l'instruction await à ;l'interieur pour gérer des opérations asyncrones de maniere plus lisible qu'avec des chaînées (.then()).

// Méthode GET
async function getUsers() {
    try {
        const reponse = await fetch('https://jsonplaceholder.typicode.com/todos/'):
        const users = await reponse.json();
        console.log(users);

        const content=document.querySelector('.content');
        const createUl=document.createElement('ul');
         
        const limit=10;

        createUl.textContent="Liste des todos";
        
        for (let i = 0; i < limit; i++) {
          const createLi=document.createElement('li');
          createLi.textContent=user[i].title;
          createUl.appendChild(createLi);
        }
        content.appendChild(createUl);

    } catch (error) {
        console.error('erreur lors de la récupération des données :', error);
    }
}

getUsers();


// méthod POST

