const product = [
  { id: 1, image: 'Headphone.jpg', title: 'Headphone', price: 'N20000' },
  { id: 2, image: 'Hplaptopcorei3NextGen.png', title: 'Laptop HP', price: 'N600000' },
  { id: 3, image: 'SonyCamera.png', title: 'Sony Camera', price: 'N700000' },
  { id: 4, image: 'Airpodpro.png', title: 'Airpod pro', price: 'N16000' },
  { id: 5, image: 'Iphone13.jpg', title: 'Iphone 13', price: 'N2000000' },
  { id: 6, image: 'Mismartwatch.png', title: 'Smart Watch', price: 'N20000' },
  { id: 7, image: 'Metaldesk.png', title: 'Metal desk', price: 'N41000' },
  { id: 8, image: 'RODEMicrophone.png', title: 'RODE', price: 'N58000' },
];

let cart = document.getElementById('root');
let cartItems = document.getElementById('cart-items');

cart.innerHTML = product.map((item) => {
  var { image, title, price, id } = item;
  return (
      `<div class="box">
          <div class="img-box">
              <img src=${image} alt="${title}"></img>
          </div>
          <div class="left">
              <p>${title}</p>
              <h2>${price}</h2>
              <button onclick="addToCart(${id})">Add to Cart</button>
          </div>
      </div>`
  );
}).join('');

function addToCart(id) {
  const item = product.find(product => product.id === id);
  var { image, title, price } = item;
  cartItems.innerHTML += (
      `<div class="cart-item">
          <div class="img-box">
              <img src=${image} alt="${title}" style="width: 50px;"></img>
          </div>
          <div class="left">
              <p>${title}</p>
              <h2>${price}</h2>
          </div>
      </div>`
  );
}
