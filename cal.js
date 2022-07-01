let ecran = document.getElementById('ecran');

let boutons = Array.from(document.getElementsByClassName('bouton'));
console.log(boutons);

boutons.map( bouton => {
    bouton.addEventListener('click', (event) => {
        switch (event.target.innerText){
            case 'C':
                ecran.innerText = '';
                break;
            case '←':
                if (ecran.innerText){
                    ecran.innerText = ecran.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    ecran.innerText = eval(ecran.innerText);
                } catch{
                    ecran.innerText =' eh bien on ne sait pas utilisé une calculatrice ? '
                }
                break;
            default:
                ecran.innerText += event.target.innerText;
        }
    })
})

// const tableau = [1, 2, 3];
// const Nvtableau = tableau.map(element => element * 2);
// console.log(Nvtableau);
