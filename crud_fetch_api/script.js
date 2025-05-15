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

const nouvelArticle={

    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
}

fetch('https://jsonplaceholder.typicode.com/posts',{

    method: 'POST',
    headers: {
        contentType:"application/json"
    },
    body:JSON.stringify(nouvelArticle)
})
.then(res => res.json())
.then(data => console.log('Article ajouté :', data));

async function ajouterArticle() {
    try{
        const reponse = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(nouvelArticle)
          });
      
          const data = await response.json();
          console.log('Article ajouté :', data);
        } catch (error) {
          console.error('Erreur lors de l’envoi :', error);
        }
      }

     // HEADER: en téte HTTP envoyés au serveur des données en format JSON, je envoie des données au format JSON {Content-Type: "application/json"}
    //  body:JSON.stringify(nouvelArticle), transforme l'objet en chaine JSON

    // method PUT modifier un article
    const articleModif ={

        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
    }

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(articleModif)
    }).then(res => res.json())
    .then(data => console.log('Mise à jour :', data));

    // // Method DELETE
    // fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     method: 'DELETE'
    // })
    // .then(res => res.json())
    // .then(data => console.log('Suppression effectuée :', data));


    function suppression(id){
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{

            method: 'DELETE'
        })

        .then(res => res.json())
        .then(data => console.log('Suppression effectuée :', data))
        .catch(error => console.error(error));

    }
    

