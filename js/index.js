// foction pour supprimer un local storage , decommentez la ligne 3 pour effacer le local storage
        //1- localStorage.removeItem('cle_de_lelement');
        //  localStorage.clear();

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


// foction pour supprimer un local storage
        // localStorage.removeItem('cle_de_lelement');
        // localStorage.clear();




function init() {
    if (localStorage.getItem('init_value') == null) {
        // stockage du panier dans le local storage
        setLocalStorage('pannier',pannier);
        let init_value = 1;
        setLocalStorage('init_value',init_value)
    }
    // definition de la valeur de depart du contenu du panier
    document.getElementById("count").innerHTML= getLocalStorage('pannier');
}
init() 


  





// fonction pour ajouter une commande dans le panier de l'utilsateur
function add(id) {
    // parties du chemin vers l'image a inserer
    src1 = 'images/'
    src2 = '.png'

    pannier = JSON.parse(localStorage.getItem('pannier'))
    pannier[0]+=1;



    //affectation de la nouvelle valeur 
    document.getElementById("count").innerHTML = pannier[0];


    if (pannier.length == 1) {

        commande.name = id
        commande.url = src1+id+src2 
        commande.quantite = 1
        commande.prix = 1500

        pannier.push(commande)
    }
    else{
        for (let i = 1; i <= pannier.length-1 ; i++) {
            if (pannier[i].name == id) {
                pannier[i].quantite +=1;

                setLocalStorage('pannier', pannier);
                console.log(JSON.parse(localStorage.getItem('pannier')))
                return 0 ;
            }
            
        }
        commande.name = id
        commande.url = src1+id+src2 
        commande.quantite = 1
        commande.prix = 1500

        pannier.push(commande)
    }
    
 
    setLocalStorage('pannier', pannier);
    console.log(JSON.parse(localStorage.getItem('pannier')))
}   






// fonction pour ajouter les articles du panier dans la page card
const tbody = document.getElementById('table1');

function createTableRows(dataList) {
    // const tbody = document.querySelector('#tableBody');
  
    for (const item of dataList) {
      const row = createRow(item);
      tbody.appendChild(row);
    }
  }
  
function createRow(data) {
    
    const rowTemplate = document.createElement('tr');

    
  
    const productThumbnailCell = document.createElement('td');
    const imgElement = document.createElement('img');
    imgElement.src = data.url;
    imgElement.alt = 'Image';
    imgElement.classList.add('img-fluid');
    productThumbnailCell.classList.add('product-thumbnail');
    productThumbnailCell.appendChild(imgElement);
  
    const productNameCell = document.createElement('td');
    const h2Element = document.createElement('h2');
    h2Element.className = 'h5 text-black';
    h2Element.innerText = data.title;
    productNameCell.classList.add('product-name');
    productNameCell.appendChild(h2Element); 
  
    const price1Cell = document.createElement('td');
    const spanPrice1Label = document.createElement('span');
    spanPrice1Label.id = data.name;
    spanPrice1Label.innerText = `${data.prix} XAF`;
    price1Cell.appendChild(spanPrice1Label);

    const Quantity = document.createElement('td');
    const divQuantity = document.createElement('div');
    divQuantity.className = 'input-group mb-3 d-flex align-items-center quantity-container';
    divQuantity.style.maxWidth = '120px';
        const divdivQuantity = document.createElement('div');
            divdivQuantity.className = 'input-group-prepend'
            const buttondivdivQuantity = document.createElement('button');
                buttondivdivQuantity.className = 'btn btn-outline-black decrease';
                buttondivdivQuantity.type = 'button';
                buttondivdivQuantity.innerHTML = '&minus;'
        divdivQuantity.appendChild(buttondivdivQuantity)

        const inputdivQuantity = document.createElement('input');
            inputdivQuantity.type = 'text';
            inputdivQuantity.className = 'form-control text-center quantity-amount'
            inputdivQuantity.placeholder = '';
            inputdivQuantity.ariaLabel = 'Example text with button addon';
            inputdivQuantity.ariaDescribedBy = 'button-addon1';
            inputdivQuantity.value = `${data.quantite}`;
        const div2divQuantity = document.createElement('div');
            div2divQuantity.className = 'input-group-append';
            const button2divdivQuantity = document.createElement('button');
                button2divdivQuantity.className = 'btn btn-outline-black increase';
                button2divdivQuantity.type = 'button';
                button2divdivQuantity.innerHTML = '&plus;'
        div2divQuantity.appendChild(button2divdivQuantity)

    divQuantity.appendChild(divdivQuantity)
    divQuantity.appendChild(inputdivQuantity)
    divQuantity.appendChild(div2divQuantity)
    Quantity.appendChild(divQuantity)

    const price2Cell = document.createElement('td');
    const spanPrice2Label = document.createElement('span');
    spanPrice2Label.id = 'price' + data.index + '1';
    spanPrice2Label.innerText = `${data.prix*data.quantite} XAF`;
    price2Cell.appendChild(spanPrice2Label);

    const cros = document.createElement('td');
    const acros = document.createElement('a');
    acros.id = '';
    acros.className = 'btn btn-black btn-sm'
    acros.innerText = 'X';
    acros.href = '#';
    cros.appendChild(acros);

  
    const qtyContainer = document.createElement('td');
    qtyContainer.classList.add('quantity-container');



    rowTemplate.appendChild(productThumbnailCell);
    rowTemplate.appendChild(productNameCell);
    rowTemplate.appendChild(price1Cell);
    rowTemplate.appendChild(Quantity);
    rowTemplate.appendChild(price2Cell);
    rowTemplate.appendChild(cros);


  
    return rowTemplate;
}
 
  
  // Données fictives pour illustrer le principe
let products = [
    { title: 'Product 1', url: 'images/product-1.png', prix: 15000, quantite: 1 , name: 'product-1' },
    { title: 'Product 2', url: 'images/product-2.png', prix: 15000, quantite: 3 , name: 'product-2' },
];
  

createTableRows(products);

function load_product() {


    while (document.getElementById('table1').rows.length > 2) {
        document.getElementById('table1').deleteRow(2);
    }   

    products = []


    let pannier = JSON.parse(localStorage.getItem('pannier'))
    let product = { title: '', url: '', prix: 15000, quantite: 0 , name: '' }
    console.log(pannier)

    for ( i = 1; i <= pannier.length -1; i++) {
        product.title = 'Product ' + i
        product.url =pannier[i].url
        product.prix =pannier[i].prix
        product.quantite =pannier[i].quantite
        product.name =pannier[i].name

        

        // alert(product.url)
        // // console.log(product)
        // console.log(products)      
    }
    products.push(product)
    createTableRows(products);
}