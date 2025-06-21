let cartItems=document.getElementsByClassName("cartItems");
let cartContainer = document.querySelector(".cart-items"); // your div
let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartContainer.innerHTML = "<p>Your cart is empty 😕</p>";
} else {
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    cartContainer.innerHTML += `
      <div class="cart-item">
        <p><strong>${item.name}</strong></p>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: ₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</p>
        <hr>
      </div>
    `;
  });

  // Show total
  cartContainer.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

