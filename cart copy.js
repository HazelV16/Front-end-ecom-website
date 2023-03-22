var carts = document.querySelectorAll('.btn-cart');

var products = [
    {
        name: 'USB C lightning cable',
        tag:'usb-c-lightning-cable',
        price: 20,
        incart: 0

    },
     {
        name: 'USB Dual Port Wall Charger',
        tag:'usb-dual-port-wall-charger',
        price: 15,
        incart: 0

    },
     {
        name: 'USB Wall Charger',
        tag:'usb-wall-charger',
        price: 15.90,
        incart: 0

    },
     {
        name: 'Four Port Wall Charger',
        tag:'four-port-wall-charger',
        price: 29,
        incart: 0

    },
     {
        name: '5W USB Adapter',
        tag:'5w-usb adapter',
        price: 29.90,
        incart: 0

    }
]
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    var productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart-count').textContent = productNumbers;
    }
}

function cartNumbers(products) {
    
    var productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart-count').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-count').textContent = 1;
    }

    setItems(products);
}

function setItems(products) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    if(cartItems != null) {
        
        if(cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].incart += 1; 
    } else {
        products.incart = 1;
        cartItems = {
            [products.tag]: products
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify 
    (cartItems));
}

function totalCost(products) {
    //console.log("The product price is", products.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cart cost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + 
        products.price);
    } else {
        localStorage.setItem("totalCost", products.price);
    }

}
 function displayCart() {
    var cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    var productContainer = document.querySelector(".products");
    var cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="products">
                <div class="product-title">
                    <ion-icon name="close-circle" style="float: left"></ion-icon>
                    <p style="float: left; top: -1000px;"> <img src="assets/images/products/${item.tag}.jpeg" style = "width: 60px; height:60px; margin-left: 0px"> </p>
                    <span>${item.name}</span>
                </div>
            
            <div class="price">$${item.price}</div>

            <div class="quantity">
            <ion-icon name="remove-circle-outline"></ion-icon>
            <span>${item.incart}</span>
            <ion-icon name="add-circle-outline"></ion-icon>
            </div> 
            
            <div class="total">
                $${item.incart * item.price} 
            </div>
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal">
                $${cartCost}
            </h4>
        `
    };
}


onLoadCartNumbers();
displayCart();

onLoadCartNumbers();


