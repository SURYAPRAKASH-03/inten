//navbar

document.querySelector('.menuIcon').addEventListener('click', function () {
    document.querySelector('.overlay-menu').classList.toggle('open');
    document.querySelector('.menuIcon').classList.toggle('toggle');
});

//card
let selectedRating = 0;

function rateProduct(rating) {
  console.log(`Product rated with ${rating} stars`);
}

function addToCart(productId) {
  console.log(`Product with ID ${productId} added to the cart`);
  displayCart();
}

function buyNow(productId) {
  console.log(`Buy Now for product with ID ${productId}`);
  // Implement your "Buy Now" logic here
}

function viewDetails(productId) {
  console.log(`View details for product with ID ${productId}`);
}

function displayCart() {
  const cartList = document.getElementById('cart-list');
  const cartItem = document.createElement('li');
  cartItem.className = 'cart-item';
  cartItem.innerHTML = `
    <span>Product Title</span>
    <span>Quantity: 1</span>
  `;
  cartList.appendChild(cartItem);
}
/*filter*/
function filterBags(category) {
  const bags = document.querySelectorAll('.bag');

  bags.forEach(bag => {
      const bagCategory = bag.classList[1]; // Assumes each bag has only one category class
      if (category === 'all' || bagCategory === category) {
          bag.style.display = 'flex';
      } else {
          bag.style.display = 'none';
      }
  });
}




