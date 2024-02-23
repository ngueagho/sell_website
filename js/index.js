// foction pour supprimer un local storage
        // localStorage.removeItem('cle_de_lelement');
        localStorage.clear();

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

// stockage du panier dans le local storage
setLocalStorage('pannier',pannier);


// definition de la valeur de depart du contenu du panier
document.getElementById("count").innerHTML= getLocalStorage('pannier');

console.log(document.getElementById("product-1"))

  


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


let data = {
    imageUrl : 'images/product-1.png',
    title: 'habit1', 
    price: 15000
}


// const tableBody = document.getElementById('table');

const tbody = document.getElementById('table');

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
    imgElement.src = data.imageUrl;
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
    spanPrice1Label.id = 'price' + data.index + '1';
    spanPrice1Label.innerText = `${data.price} XAF`;
    price1Cell.appendChild(spanPrice1Label);


    // const productNameCell2 = document.createElement('td');
    // const h2Element2 = document.createElement('h2');
    // h2Element2.className = 'h5 text-black';
    // h2Element2.innerText = data.title;
    // productNameCell2.classList.add('product-name');
    // productNameCell2.appendChild(h2Element2);

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
                buttondivdivQuantity.innerText = '-'
        divdivQuantity.appendChild(buttondivdivQuantity)

        const inputdivQuantity = document.createElement('input');
            inputdivQuantity.type = 'text';
            inputdivQuantity.className = 'form-control text-center quantity-amount'
            inputdivQuantity.placeholder = '';
            inputdivQuantity.ariaLabel = 'Example text with button addon';
            inputdivQuantity.ariaDescribedBy = 'button-addon1';
            inputdivQuantity.value = '1';
        const div2divQuantity = document.createElement('div');
            div2divQuantity.className = 'input-group-append';
            const button2divdivQuantity = document.createElement('button');
                button2divdivQuantity.className = 'btn btn-outline-black increase';
                button2divdivQuantity.type = 'button';
                button2divdivQuantity.innerHTML = '&plus;'
                button2divdivQuantity.innerText = '+'
        div2divQuantity.appendChild(button2divdivQuantity)

    divQuantity.appendChild(divdivQuantity)
    divQuantity.appendChild(inputdivQuantity)
    divQuantity.appendChild(div2divQuantity)
    Quantity.appendChild(divQuantity)

    const price2Cell = document.createElement('td');
    const spanPrice2Label = document.createElement('span');
    spanPrice2Label.id = 'price' + data.index + '1';
    spanPrice2Label.innerText = `${data.price} XAF`;
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
  
    // ... (les autres parties restent inchangées)
  
    // function createInputQuantity() {
    //   const inputQtyAmount = document.createElement('input');
    //   inputQtyAmount.type = 'text';
    //   inputQtyAmount.className = 'form-control text-center quantity-amount';
    //   inputQtyAmount.placeholder = '';
    //   inputQtyAmount.ariaLabel = 'Example text with button addon';
    //   inputQtyAmount.ariaDescribedBy = 'button-addon1';
    //   inputQtyAmount.value = '1';
    //   return inputQtyAmount;
    // }
  
    // const decreaseButton = document.createElement('button');
    // decreaseButton.className = 'btn btn-outline-black decrease';
    // decreaseButton.type = 'button';
    // decreaseButton.innerText = '-';
  
    // const increaseButton = document.createElement('button');
    // increaseButton.className = 'btn btn-outline-black increase';
    // increaseButton.type = 'button';
    // increaseButton.innerText = '+';
  
    // const buttonsGroup = document.createElement('div');
    // buttonsGroup.className = 'input-group-append';
    // buttonsGroup.appendChild(decreaseButton);
    // buttonsGroup.appendChild(increaseButton);
  
    // qtyContainer.appendChild(createInputQuantity());
    // qtyContainer.appendChild(buttonsGroup);
  
    rowTemplate.appendChild(productThumbnailCell);
    rowTemplate.appendChild(productNameCell);
    rowTemplate.appendChild(price1Cell);
    rowTemplate.appendChild(Quantity);
    // rowTemplate.appendChild(qtyContainer);
    rowTemplate.appendChild(price2Cell);
    rowTemplate.appendChild(cros);


  
    return rowTemplate;
  }
  
  // Données fictives pour illustrer le principe
  const products = [
    { title: 'Product 1', imageUrl: './images/product-1.png', price: 15000 },
    { title: 'Product 2', imageUrl: './images/product-2.png', price: 15000 },
    // Ajoutez d'autres produits ici...
  ];
  
  createTableRows(products);
  























// function createRow(data) {
//     // const rowTemplate = document.createElement('tr');
  
//     // const productThumbnailCell = document.createElement('td');
//     // const imgElement = document.createElement('img');
//     // imgElement.src = data.imageUrl;
//     // imgElement.alt = 'Image';
//     // imgElement.classList.add('img-fluid');
//     // productThumbnailCell.appendChild(imgElement);
  
//     // const productNameCell = document.createElement('td');
//     // const h2Element = document.createElement('h2');
//     // h2Element.className = 'h5 text-black';
//     // h2Element.innerText = data.title;
//     // productNameCell.appendChild(h2Element);
  
//     // const price1Cell = document.createElement('td');
//     // const spanPrice1Label = document.createElement('span');
//     // spanPrice1Label.id = 'price' + data.index + '1';
//     // spanPrice1Label.innerText = `${data.price} XAF`;
//     // price1Cell.appendChild(spanPrice1Label);
  
//     // const qtyContainer = document.createElement('td');


//     const rowTemplate = document.createElement('tr');

//     const productThumbnailCell = document.createElement('td');
//     const imgElement = document.createElement('img');
//     imgElement.src = data.imageUrl;
//     imgElement.alt = 'Image';
//     imgElement.classList.add('img-fluid');
//     productThumbnailCell.classList.add('product-thumbnail');
//     productThumbnailCell.appendChild(imgElement);
  
//     const productNameCell = document.createElement('td');
//     const h2Element = document.createElement('h2');
//     h2Element.className = 'h5 text-black';
//     h2Element.innerText = data.title;
//     productNameCell.classList.add('product-name');
//     productNameCell.appendChild(h2Element);
  
//     const price1Cell = document.createElement('td');
//     const spanPrice1Label = document.createElement('span');
//     spanPrice1Label.id = 'price' + data.index + '1';
//     spanPrice1Label.innerText = `${data.price} XAF`;
//     price1Cell.appendChild(spanPrice1Label);
  
//     const qtyContainer = document.createElement('td');
//     qtyContainer.classList.add('quantity-container');
  






//     const inputQtyAmount = document.createElement('input');
//     inputQtyAmount.type = 'text';
//     inputQtyAmount.className = 'form-control text-center quantity-amount';
//     inputQtyAmount.placeholder = '';
//     inputQtyAmount.ariaLabel = 'Example text with button addon';
//     inputQtyAmount.setAttribute('aria-describedby', 'button-addon1');
//     inputQtyAmount.value = '1';
  
//     const decreaseButton = document.createElement('button');
//     decreaseButton.className = 'btn btn-outline-black decrease';
//     decreaseButton.type = 'button';
//     decreaseButton.innerText = '-';
  
//     const increaseButton = document.createElement('button');
//     increaseButton.className = 'btn btn-outline-black increase';
//     increaseButton.type = 'button';
//     increaseButton.innerText = '+';
  
//     const buttonsGroup = document.createElement('div');
//     buttonsGroup.className = 'input-group-append';
//     buttonsGroup.appendChild(decreaseButton);
//     buttonsGroup.appendChild(increaseButton);
  
//     qtyContainer.appendChild(inputQtyAmount);
//     qtyContainer.appendChild(buttonsGroup);
  
//     rowTemplate.appendChild(productThumbnailCell);
//     rowTemplate.appendChild(productNameCell);
//     rowTemplate.appendChild(price1Cell);
//     rowTemplate.appendChild(qtyContainer);
//     rowTemplate.appendChild(document.createTextNode('')); // Crée un espace entre les colonnes
//     rowTemplate.appendChild(document.createElement('td')); // Crée une colonne supplémentaire pour le bouton Supprimer
//     rowTemplate.appendChild(document.createElement('a')); // Crée un lien pour le bouton Supprimer
//     const removeBtn = document.createElement('a');
//     removeBtn.href = '#';
//     removeBtn.className = 'btn btn-black btn-sm';
//     removeBtn.innerText = 'X';
//     rowTemplate.appendChild(removeBtn);
  
//     return rowTemplate;
//   }
  
//   // Fonction principale pour créer les lignes de la table
//   function createRowsFromData(dataList) {
//     let index = 1;
//     for (const item of dataList) {
//       const row = createRow({ ...item, index });
//       row.id = 'row' + index++;
//       tableBody.appendChild(row.cloneNode(true));
//     }
//   }
  
//   // Données fictives pour illustrer le principe
//   const products = [
//     { title: 'Product 1', imageUrl: './images/product-1.png', price: 15000 },
//     { title: 'Product 3', imageUrl: './images/product-2.png', price: 15000 },
//     // Ajoutez d'autres produits ici...
//   ];
  
//   createRowsFromData(products);
  














// function createRow(data) {
//     // const tableBody = document.getElementById('table');
//     const rowTemplate = document.createElement('tr');
  
//     const productThumbnailCell = document.createElement('td');
//     const imgElement = document.createElement('img');
//     imgElement.src = data.imageUrl;
//     imgElement.alt = 'Image';
//     imgElement.classList.add('img-fluid');
//     productThumbnailCell.appendChild(imgElement);
  
//     const productNameCell = document.createElement('td');
//     const h2Element = document.createElement('h2');
//     h2Element.className = 'h5 text-black';
//     h2Element.innerText = data.title;
//     productNameCell.appendChild(h2Element);
  
//     const price1Cell = document.createElement('td');
//     const spanPrice1Label = document.createElement('span');
//     spanPrice1Label.id = 'price11';
//     spanPrice1Label.innerText = `${data.price} XAF`;
//     price1Cell.appendChild(spanPrice1Label);
  
//     const qtyContainer = document.createElement('td');
//     const inputQtyAmount = document.createElement('input');
//     inputQtyAmount.type = 'text';
//     inputQtyAmount.className = 'form-control text-center quantity-amount';
//     inputQtyAmount.placeholder = '';
//     inputQtyAmount.ariaLabel = 'Example text with button addon';
//     inputQtyAmount.setAttribute('aria-describedby', 'button-addon1');
//     inputQtyAmount.value = '1';
  
//     const decreaseButton = document.createElement('button');
//     decreaseButton.className = 'btn btn-outline-black decrease';
//     decreaseButton.type = 'button';
//     decreaseButton.innerText = '-';
  
//     const increaseButton = document.createElement('button');
//     increaseButton.className = 'btn btn-outline-black increase';
//     increaseButton.type = 'button';
//     increaseButton.innerText = '+';
  
//     const buttonsGroup = document.createElement('div');
//     buttonsGroup.className = 'input-group-append';
//     buttonsGroup.appendChild(decreaseButton);
//     buttonsGroup.appendChild(increaseButton);
  
//     qtyContainer.appendChild(inputQtyAmount);
//     qtyContainer.appendChild(buttonsGroup);
  
//     const removeBtn = document.createElement('a');
//     removeBtn.href = '#';
//     removeBtn.className = 'btn btn-black btn-sm';
//     removeBtn.innerText = 'X';
  
//     rowTemplate.appendChild(productThumbnailCell);
//     rowTemplate.appendChild(productNameCell);
//     rowTemplate.appendChild(price1Cell);
//     rowTemplate.appendChild(qtyContainer);
//     rowTemplate.appendChild(document.createTextNode('')); // Crée un espace entre les colonnes
//     rowTemplate.appendChild(document.createElement('td')); // Crée une colonne supplémentaire pour le bouton Supprimer
//     rowTemplate.appendChild(removeBtn);
  
//     return rowTemplate;
//   }
  
//   // Fonction principale pour créer les lignes de la table
//   function createRowsFromData(dataList) {
//     for (const item of dataList) {
//       const row = createRow(item);
//       tableBody.appendChild(row.cloneNode(true));
//     }
//   }
  
//   // Données fictives pour illustrer le principe
//   const products = [
//     { title: 'Product 1', imageUrl: './images/product-1.png', price: 15000 },
//     { title: 'Product 1', imageUrl: './images/product-1.png', price: 15000 },
//     // Ajoutez d'autres produits ici...
//   ];
  
//   createRowsFromData(products);
  