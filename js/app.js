// app.js
  let cartCount = 0;

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault(); // Evita el salto si es un enlace
      cartCount++;
      document.getElementById('cart-count').innerText = cartCount;
    });
  });