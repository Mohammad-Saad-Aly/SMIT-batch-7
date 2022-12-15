let products = [
    {
        name: "Iphone 12",
        price: 12,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021660000" 
    },
    {
        name: "Iphone x",
        price: 10,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg" 
    },
    {
        name: "Iphone 7",
        price: 6,
        image: "data:image/jpeg;base64,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" 
    },
]

let main = document.getElementById('products');

for(var i = 0; i < products.length; i++){
    main.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${products[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${products[i].name}</h5>
        <p class="card-text">${products[i].price} Bitcoin</p>
        <a href="#" onclick='addToCart("${products[i].name}","${products[i].price}","${products[i].image}")' class="btn btn-primary">ADD TO CART</a>
    </div>
</div>
    `
}

let allCarts = [];
let carts = localStorage.getItem('carts')

if(carts !== null){
   allCarts = JSON.parse(carts)
   let cart_badge = document.getElementById('cart_badge');
   cart_badge.innerHTML = allCarts.length
}

function addToCart(name,price,image){
    let cart = {
        name,
        price,
        image
    }
    allCarts.push(cart)
    localStorage.setItem('carts',JSON.stringify(allCarts))
    let cart_badge = document.getElementById('cart_badge');
    cart_badge.innerHTML = allCarts.length
}