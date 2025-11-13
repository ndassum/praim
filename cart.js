function getCart() {
  try { return JSON.parse(localStorage.getItem('praim_cart') || '[]'); }
  catch (e) { return []; }
}

function saveCart(items) {
  localStorage.setItem('praim_cart', JSON.stringify(items));
}

function cartCount() {
  return getCart().length;
}

function showCartLink() {
  const link = document.getElementById('cartLink');
  const num = document.getElementById('cartCount');
  const c = cartCount();
  if (link) link.style.display = c > 0 ? 'inline-flex' : 'none';
  if (num) num.textContent = String(c);
}

function addToCart(item) {
  const items = getCart();
  items.push(item);
  saveCart(items);
  showCartLink();
}

function initCartButtons() {
  document.querySelectorAll('[data-addcart]').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name || 'Item';
      const price = parseFloat(btn.dataset.price || '0');
      const image = btn.dataset.image || '';
      addToCart({ name, price, image });
    });
  });
}

function initCartUI() {
  showCartLink();
  initCartButtons();
}

document.addEventListener('DOMContentLoaded', initCartUI);
