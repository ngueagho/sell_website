// fonction pour ajouter les elements au panier et incrementer le compter
current_value = 0 ;

// fonction pour enregistrer les elements dans le local storage
function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


// fonction pour recuperer les elements dans  le local storage
function getLocalStorage(key) {
    if (localStorage.getItem(key) == null) {
        return 0 ;
    }
    else{
        return JSON.parse(localStorage.getItem(key));
    }
}


// foction pour supprimer un local storage
localStorage.removeItem('myValue');
localStorage.clear();
// setLocalStorage('root', "root")



function init() {
    document.getElementById("count").innerHTML= getLocalStorage('current_value');
}


// function init() {
//     // initialisation de la valeur de départ du panier
//     if (localStorage.getItem('current_value') === null || document.readyState === 'loading') {
//       // L'élément n'existe pas dans le local storage ou la page n'est pas encore chargée complètement
//       setLocalStorage('current_value', 0);
//     }
  
//     let currentValue = getLocalStorage('current_value');
//     document.getElementById("count").innerHTML = currentValue;
// }
  


function add() {

        // L'élément existe dans le local storage
        // document.getElementById("count").innerHTML= getLocalStorage('current_value');
        current_value = parseInt(getLocalStorage('current_value'));

        //recuperation de l'element panier
    

        current_value +=1;

        setLocalStorage('current_value', current_value);

        //affectation de la nouvelle valeur 
        document.getElementById("count").innerHTML= getLocalStorage('current_value');

}