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
        // localStorage.removeItem('cle_de_lelement');
        // localStorage.clear();

// definition de la valeur de depart du contenu du panier
document.getElementById("count").innerHTML= getLocalStorage('current_value');




  


function add() {

        // L'élément existe dans le local storage
        current_value = parseInt(getLocalStorage('current_value'));

        //recuperation de l'element panier
    
        current_value +=1;

        setLocalStorage('current_value', current_value);

        //affectation de la nouvelle valeur 
        document.getElementById("count").innerHTML= getLocalStorage('current_value');
}