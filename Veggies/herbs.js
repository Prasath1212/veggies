$(document).ready(function(){
    update_amounts();
    $('.qty, .price') .on('keyup keypress blur change', function(e) {
        update_amounts();
    });
});
function update_amounts(){
    var sum = 0.0;
    $('#myTable > tbody > tr').each(function(){
        var qty=$(this).find('.qty').val();
        var price=$(this).find('.price').val();
        var amount=(qty*price)
        sum+=amount;
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(sum);
}

var incrementQty;
var decrementQty;
var plusBtn = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click(function(){
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    $n.val(Number($n.val())+1);
    update_amounts();
});

var decrementQty = minusBtn.click(function(){
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    var QtyVal = Number($n.val());
    if (QtyVal>0) {
        $n.val(QtyVal-1);
    }
    update_amounts();
});

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        names: 'Curry Leaves',
        tag: 'curry',
        price: 10,
        inCart:0
    },
    {
        names: 'Coriander',
        tag: 'coriander',
        price: 10,
        inCart:0
    },
    {
        names: 'mint',
        tag: 'mint',
        price: 15,
        inCart:0
    },
    {
        names: 'Tamarind',
        tag: 'tamarind',
        price: 20,
        inCart:0
    },
    {
        names: 'Basil',
        tag: 'basil',
        price: 10,
        inCart:0
    },
    
];

for (let i=0; i < carts.length; i++) 
{
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }

}




function cartNumbers(products) {
    
    let productNumbers = localStorage.getItem('cartNumbers');
    

    productNumbers = parseInt(productNumbers);
    

    if(productNumbers) {
        localStorage.setItem('cartNumbers',productNumbers + 1);
       
    }
    else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(products);

}

function setItems(products) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    

    if (cartItems !=null) {
        

        if(cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart += 1;
    }
    else {
        products.inCart = 1;
        cartItems = {
            [products.tag]:products
        }
    }
    
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}


function totalCost(products) {
    //console.log("the product price is", products.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("my cartCost is",cartCost);
    console.log(typeof cartCost);

    if(cartCost !=null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + products.price);
    }

    else {
        localStorage.setItem("totalCost",products.price);
    }
}


function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if(cartItems && productContainer) {
        
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle" class="delete-button" data-tag="${item.tag}"></ion-icon>
                <img src="./images/${item.tag}.png">
                <span>${item.names}</span>
            </div>
            <div class="price">Rs:${item.price}.00</div>
            <div class="quantity">
                
                <span>${item.inCart}</span>
                
            </div>
            <div class="total">
                Rs:${item.inCart * item.price}.00
            </div>`;
        });


        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
         Total =
        </h4>
        <h4 class="basketTotal">
        Rs${cartCost}.00
        </h4>
        `
    }

    document.querySelectorAll(".delete-button").forEach(button => {
        
        button.addEventListener("click", event => {
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
    
        let newcartItems =Array.from(cartItems).filter((item) => item.tag != event.target.dataset.tag)
    
        localStorage.setItem('productsInCart',JSON.stringify(newcartItems))
    
        displayCart();
        })
        console.log(button.dataset.tag)
    })
}




onLoadCartNumbers();
displayCart();