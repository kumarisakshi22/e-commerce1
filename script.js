const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

add = document.getElementById("add");
add.addEventListener("click", ()=>{
    console.log("Updating List....");
    clt = document.getElementById('cloth').value;
    nam = document.getElementById('name').value;
    pr = document.getElementById('price').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([clt,nam,pr]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([clt,nam,pr]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }

    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) =>{
        str +=`
        <tr>
        <td><a href="#"><i class="far fa-times-circle"></i></a></td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td><input type="number" value="1"></td>
        </tr>`;
    });
    

});


let carts = document.querySelectorAll('.r');

let products = [
    {
        name:'1',
        tag:'a',
        price:1001,
        inCart:0
    },
    {
        name:'2',
        tag:'b',
        price:1002,
        inCart:0
    },
    {
        name:'3',
        tag:'c',
        price:1003,
        inCart:0
    },
    {
        name:'4',
        tag:'d',
        price:1004,
        inCart:0
    },
    {
        name:'5',
        tag:'e',
        price:1005,
        inCart:0
    },
    {
        name:'6',
        tag:'f',
        price:1006,
        inCart:0
    },
    {
        name:'7',
        tag:'g',
        price:1007,
        inCart:0
    },
    {
        name:'Three Piece',
        tag:'threepiece',
        price:1008,
        inCart:0
    },
    {
        name:'Three Piece',
        tag:'threepiece',
        price:1009,
        inCart:0
    },
]


for (let i=0; i< carts.length; i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.quarySelector('.cart span').textContent = productNumbers;
    }

}

function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers +1);
        document.querySelector('.pop h5').textContent=productNumbers +1;
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.pop h5').textContent = 1;

    }
    setItems(product);
    
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    

    if (cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}
function totalCost(product) {
    //console.log("The product price is",product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is",cartCost);
    console.log(typeof cartCost );

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost",product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    if( cartItems && productContainer ) {
        console.log("running");
    }

    
}


onLoadCartNumbers();
displayCart();