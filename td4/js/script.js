document.querySelectorAll('.barres>div>div').forEach(e => {
    console.log(e)
})

document.querySelector('h1 > span').addEventListener('click', function () {
    body = document.querySelector('body')
    couleur = body.classList.toggle('couleur_fond')
    if (couleur) {
        console.log('Ajout')
    } else {
        console.log('Suppression')
    }
});


body = document.querySelector('body')
body.style.backgroundColor = 'aqua'
body.addEventListener('click', couleur)
function couleur(){
    body.style.backgroundColor = ''
}

document.querySelector('h1>span').innerHTML="<span>site de con</span>"



document.querySelector('#button').addEventListener('click', ajouter)
function ajouter(){
    let input = document.createElement("input")
    input.innerText="Coucou je suis un chameau !"
    document.querySelector('form').appendChild(input)
}

