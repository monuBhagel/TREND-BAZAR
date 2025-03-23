
    var addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var productId = this.getAttribute("data-product-id");
            var productPrice = parseFloat(this.getAttribute("data-price"));

            // Implement the AJAX call to add the product to the cart
            // Example using fetch API:
            fetch("/add-to-cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productId: productId,
                    productPrice: productPrice
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.message); // Assuming the server responds with a message
            })
            .catch(error => {
                console.error("Error adding to cart:", error);
            });
        });
    });
