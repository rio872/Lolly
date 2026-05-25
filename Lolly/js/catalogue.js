
(function () {
  const productCards = document.querySelectorAll('.lolly-product-card, .ring-showcase-card');
  const addCartButtons = document.querySelectorAll('.add-cart-hover, .ring-showcase-cart');

  const getProduct = (card) => ({
    name: card.querySelector('h3')?.innerText || '',
    price: card.querySelector('p')?.innerText || '',
    image: card.querySelector('img')?.getAttribute('src') || ''
  });

  productCards.forEach((card) => {
    const saveProduct = () => {
      const product = getProduct(card);
      localStorage.setItem('productName', product.name);
      localStorage.setItem('productPrice', product.price);
      localStorage.setItem('productImage', product.image);
    };

    card.addEventListener('click', saveProduct);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        saveProduct();
      }
    });
  });

  addCartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const card = button.closest('.lolly-product-card, .ring-showcase-card');
      if (!card) return;

      const product = getProduct(card);
      localStorage.setItem('cartProductName', product.name);
      localStorage.setItem('cartProductPrice', product.price);
      localStorage.setItem('cartProductImage', product.image);
      alert(product.name + ' added to cart!');
    });
  });
})();
