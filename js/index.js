// fonction pour ajouter les elements au panier et incrementer le compter
current_value = 0 ;

// contiend tout les elements relatif au panier (non pull, url , la quantite, et le prix)
let pannier = [];

// je definit le total du contenu du panier
total_elements = 0;

// j'insere ce total dans ma varable panier , qui contiendra tout les elements relatif au panier
pannier.push(total_elements)

let commande = {
    name : "",
    url: "",
    quantite:"",
    prix:""
}

// fonction pour enregistrer les elements dans le local storage
function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// fonction pour recuperer les elements dans  le local storage
function getLocalStorage() {
    let basket = JSON.parse(localStorage.getItem('pannier'))

    if (basket.length == 1) {
        return 0 ;
    }
    else{
        return basket[0]
    }
}




// commande.name = "name1"
// commande.url = "name2"
// commande.quantite = "name3"
// commande.prix = "name4"

// pannier.push(commande)





// foction pour supprimer un local storage
        // localStorage.removeItem('cle_de_lelement');
        // localStorage.clear();

// stockage du panier dans le local storage
setLocalStorage('pannier',pannier);


// definition de la valeur de depart du contenu du panier
document.getElementById("count").innerHTML= getLocalStorage('pannier');

console.log(document.getElementById("product-1"))

  

function add(id) {
    // parties du chemin vers l'image a inserer
    src1 = 'images/'
    src2 = '.png'

    pannier = JSON.parse(localStorage.getItem('pannier'))
    pannier[0]+=1;



    //affectation de la nouvelle valeur 
    document.getElementById("count").innerHTML = pannier[0];

    // recupere la position de l'element s'il existe deja daans le panier

    if (pannier.length == 1) {

        commande.name = id
        commande.url = src1+id+src2 
        commande.quantite = 1
        commande.prix = 0

        pannier.push(commande)
    }
    else{
        for (let i = 1; i <= pannier.length-1 ; i++) {
            if (pannier[i].name == id) {
                pannier[i].quantite +=1;

                setLocalStorage('pannier', pannier);
                console.log(pannier)
                return 0 ;
            }
            
        }
        commande.name = id
        commande.url = src1+id+src2 
        commande.quantite = 1
        commande.prix = 0

        pannier.push(commande)
    }
    
 
    setLocalStorage('pannier', pannier);
    console.log(pannier)
}   