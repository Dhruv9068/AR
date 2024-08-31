const displayCartItems = () => {
    try {
        // Get cart data from local storage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        console.log('Cart data:', cart); // Debugging line

        // Get all link elements
        const links = document.querySelectorAll('.ar-object');
        console.log('Links:', links); // Debugging line

        // Extract product IDs from cart
        const cartProductIds = cart.map(item => item.product_id); // Ensure IDs are strings
        console.log('Cart Product IDs:', cartProductIds); // Debugging line

        // Show or hide links based on cart product IDs
        links.forEach(link => {
            const productId = link.id; // Ensure ID is treated as string
            if (cartProductIds.includes(productId)) {
                link.style.display = 'inline'; // Show the link
            } else {
                link.style.display = 'none'; // Hide the link
            }
        });

        // Show a message if no items are in the cart
        if (cartProductIds.length === 0) {
            const message = document.createElement('p');
            message.textContent = 'No items in the cart.';
            document.body.appendChild(message);
        }

    } catch (error) {
        console.error('Error displaying cart items:', error);
    }
};

// Initialize the display
displayCartItems();
