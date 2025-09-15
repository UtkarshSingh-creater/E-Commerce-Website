
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart animation
    const addToCartButtons = document.querySelectorAll('.product-actions button:nth-child(2)');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-check"></i> Added';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            }, 2000);
        });
    });

    // Favorite button toggle
    const favoriteButtons = document.querySelectorAll('.product-actions button:first-child');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.innerHTML.includes('fa-heart')) {
                this.innerHTML = '<i class="fas fa-heart" style="color:#ff006e"></i> Saved';
            } else {
                this.innerHTML = '<i class="fas fa-heart"></i> Save';
            }
        });
    });

    
    const acceptCookies = document.querySelector('.btn-accept');
    if (acceptCookies) {
        acceptCookies.addEventListener('click', function() {
            document.querySelector('.cookie-consent').style.display = 'none';
        });
    }

   
    function convertToRupees(priceInDollars) {
        const exchangeRate = 83; 
        return Math.round(priceInDollars * exchangeRate);
    }

 
    function formatPrice(price) {
        return '₹' + price.toLocaleString('en-IN');
    }

    
    function convertAllPrices() {
        const priceElements = document.querySelectorAll('.product-price');
        priceElements.forEach(element => {
           
            const priceText = element.textContent;
            const priceValue = parseFloat(priceText.replace(/[^\d.]/g, ''));
            
            // Convert and format the price
            if (!isNaN(priceValue)) {
                const priceInRupees = convertToRupees(priceValue);
                element.textContent = formatPrice(priceInRupees);
            }
        });
    }

    
    convertAllPrices();

});
