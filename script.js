function filterMenu(category) {
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function validateContactForm() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (!email.includes("@") || message.trim() === "") {
    alert("Please provide a valid email and message.");
    return false;
  }
  document.getElementById("contactConfirmation").textContent = "Thank you for contacting us!";
  return false; // Prevent actual form submission
}

function validateReservationForm() {
  document.getElementById("reservationConfirmation").textContent =
    "Reservation submitted! We will contact you shortly.";
  return false;
}

let cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  const subtotalElement = document.getElementById("subtotal");
  cartList.innerHTML = "";
  let subtotal = 0;
  cart.forEach((entry, index) => {
    subtotal += entry.price;
    const li = document.createElement("li");
    li.textContent = `${entry.item} - $${entry.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
  subtotalElement.textContent = subtotal.toFixed(2);
}

function submitOrderForm() {
  document.getElementById("orderConfirmation").textContent =
    "Thank you for your order! We will contact you to confirm.";
  return false;
}
