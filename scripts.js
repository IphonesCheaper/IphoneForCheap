document.addEventListener('DOMContentLoaded', () => {
    const iPhones = [
        { name: "iPhone 2G", price: 499 },
        { name: "iPhone 3G", price: 599 },
        { name: "iPhone 3GS", price: 699 },
        { name: "iPhone 4", price: 799 },
        { name: "iPhone 4S", price: 899 },
        { name: "iPhone 5", price: 999 },
        { name: "iPhone 5C", price: 599 },
        { name: "iPhone 5S", price: 699 },
        { name: "iPhone 6", price: 799 },
        { name: "iPhone 6 Plus", price: 899 },
        { name: "iPhone 6S", price: 999 },
        { name: "iPhone 6S Plus", price: 1099 },
        { name: "iPhone SE", price: 499 },
        { name: "iPhone 7", price: 699 },
        { name: "iPhone 7 Plus", price: 799 },
        { name: "iPhone 8", price: 899 },
        { name: "iPhone 8 Plus", price: 999 },
        { name: "iPhone X", price: 1099 },
        { name: "iPhone XR", price: 799 },
        { name: "iPhone XS", price: 999 },
        { name: "iPhone XS Max", price: 1099 },
        { name: "iPhone 11", price: 699 },
        { name: "iPhone 11 Pro", price: 999 },
        { name: "iPhone 11 Pro Max", price: 1099 },
        { name: "iPhone SE (2nd generation)", price: 399 },
        { name: "iPhone 12", price: 799 },
        { name: "iPhone 12 Mini", price: 699 },
        { name: "iPhone 12 Pro", price: 999 },
        { name: "iPhone 12 Pro Max", price: 1099 },
        { name: "iPhone 13", price: 799 },
        { name: "iPhone 13 Mini", price: 699 },
        { name: "iPhone 13 Pro", price: 999 },
        { name: "iPhone 13 Pro Max", price: 1099 },
        { name: "iPhone 14", price: 799 },
        { name: "iPhone 14 Plus", price: 899 },
        { name: "iPhone 14 Pro", price: 999 },
        { name: "iPhone 14 Pro Max", price: 1099 },
    ];

    const productContainer = document.getElementById('product-list');

    iPhones.forEach(iphone => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="iphone.jpg" alt="${iphone.name}">
            <h3>${iphone.name}</h3>
            <p>Price: $${(iphone.price * 0.7).toFixed(2)}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeModalButton = document.querySelector('.close-button');
    const checkoutForm = document.getElementById('checkout-form');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;
            
            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - ${productPrice}`;
            cartItems.appendChild(cartItem);
        });
    });

    checkoutButton.addEventListener('click', () => {
        checkoutModal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(checkoutForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Form Data Submitted', data);
        
        // Here you would typically send the data to the server
        window.location.href = 'https://paypal.me/IphonesCheaper';
    });
});
