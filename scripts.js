// scripts.js
let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartCount.innerText = cart.length;
    cartItems.innerHTML = ''; // Limpa os itens do carrinho

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    totalPriceElement.innerText = totalPrice.toFixed(2);
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = (cartModal.style.display === 'none' || cartModal.style.display === '') ? 'block' : 'none';
}

function finalizePurchase() {
    const paymentMethod = document.getElementById('payment-method').value;
    alert(`Compra finalizada! Forma de pagamento: ${paymentMethod}. Total: R$ ${totalPrice.toFixed(2)}`);
    cart = [];
    totalPrice = 0;
    updateCart();
    toggleCart();
}
