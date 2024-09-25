let g1 = [0, 9, 5, 3, 0, 8, 7, 0, 1, 8, 2, 1, 0, 7, 0, 0, 6, 0, 6, 7, 0, 4, 0, 0, 8, 0, 0, 2, 4, 0, 0, 0, 9, 0, 5, 0, 0, 0, 9, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 0, 0, 0, 4, 8, 0, 0, 4, 0, 0, 2, 0, 8, 9, 0, 6, 0, 0, 3, 0, 1, 7, 2, 1, 0, 2, 8, 0, 7, 6, 3, 0]

let g2 = [0, 7, 0, 2, 0, 6, 3, 4, 0, 0, 0, 9, 5, 0, 1, 7, 0, 0, 2, 5, 0, 7, 4, 0, 8, 9, 0, 0, 6, 0, 1, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 4, 1, 6, 2, 1, 3, 0, 8, 0, 0, 4, 0, 0, 4, 2, 0, 0, 5, 8, 0, 1, 3, 0, 1, 5, 4, 0, 0, 0, 0, 0, 6, 8, 0, 0, 0, 0, 0, 5, 0]

let g3 = [0, 0, 0, 8, 3, 0, 0, 5, 7, 0, 0, 8, 5, 0, 0, 6, 0, 0, 1, 3, 0, 0, 0, 2, 0, 8, 0, 8, 0, 2, 3, 9, 0, 7, 0, 0, 6, 0, 0, 1, 0, 0, 0, 3, 2, 0, 5, 7, 2, 0, 4, 0, 9, 0, 0, 6, 0, 4, 1, 0, 3, 7, 0, 0, 7, 3, 9, 0, 8, 0, 6, 0, 0, 0, 0, 7, 6, 0, 4, 0, 0]


function niveau1(){
    let inputs = document.querySelectorAll('input')

    for (let i = 0, t = g1.length; i < t; i++) {
        inputs[i].value = g1[i]
        if (g1[i] !== 0) {
            inputs[i].disabled = true
        }
    }
}
function niveau2(){
    let inputs = document.querySelectorAll('input')

    for (let i = 0, t = g2.length; i < t; i++) {
        inputs[i].value = g2[i]
        if (g2[i] !== 0) {
            inputs[i].disabled = true
        }
    }
}
function niveau3(){
    let inputs = document.querySelectorAll('input')

    for (let i = 0, t = g3.length; i < t; i++) {
        inputs[i].value = g3[i]
        if (g3[i] !== 0) {
            inputs[i].disabled = true
        }
    }
}

let bouton = document.querySelectorAll('button')
bouton.addEventLister('click', niveau)

function niveau() {
    if(bouton[0]){
        niveau1()
    }
    else if(bouton[1]){
        niveau2()
    }  
    else if(bouton[2]){
        niveau3()
    }   
}



