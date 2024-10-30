/*let data = {
    "2024-09-25": [
        {
            "type": "relevé",
            "heure": "12:23:51"
        },
        {
            "type": "newSession",
            "heure": "12:24:27",
            "mobileDevice": false,
            "statut": 10
        },
        {
            "type": "relevé",
            "heure": "12:24:27"
        },
        {
            "type": "newSession",
            "heure": "12:24:59",
            "mobileDevice": true,
            "statut": 10
        },
        {
            "type": "relevé",
            "heure": "12:25:00"
        },
        {
            "type": "relevé",
            "heure": "12:26:01"
        }
    ],
    "1986-10-24": []
}*/


let divConnexion = document.querySelector('.connexion');
let divSession = document.querySelector('.session')

Object.entries(data).forEach(([key, value]) => {
    let date = key.split("-").reverse().join("/");
    divConnexion.innerHTML += `<div class='connexion'>À la date du ${date}, il y a eu ${value.length} interactions avec la passerelle.</div>`;


    let nb = 0
    let nbM = 0
    value.forEach((i) => {
        if (i.type == 'newSession') {
            divSession.innerHTML = `<div class='session'>De plus, il y a eu ${nb++} connexion</div>`
            if (i.mobileDevice == true) {
                divSession.innerHTML += `<div class='session'>dont ${nbM++} sur mobile</div>`
            }
        }
        

    });
    let nombre = nbM/nb*360

        let conic = document.querySelector(".conic");
        conic.addEventListener("click", randomConic);

        function randomConic() {
            conic.style.background = `conic-gradient(#09c 0deg ${nombre}deg, #c09 ${nombre}deg 360deg)`;
        }
});




