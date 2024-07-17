const CART_LIST_KEY = "cartList";
let cartList = [];

loadCart();

function saveCart() {
  window.localStorage.setItem(CART_LIST_KEY, JSON.stringify(cartList));
}
function loadCart() {
  const data = localStorage.getItem(CART_LIST_KEY);
  let obj = null;
  if (data) obj = JSON.parse(data);
  if (obj) cartList = Array.from(obj);
}

function getCartList() {
  return cartList;
}
function getCartItemsCount() {
  return cartList.length;
}
function getItemFromCart(itemId) {
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].id === itemId) {
      return true;
    }
  }
  return false;
}
function addItemToCart(itemId, quantity) {
  cartList.unshift({ id: itemId, quantity: quantity });
  saveCart();
}
function removeItemFromCart(itemId) {
  cartList = cartList.filter((i) => i.id !== itemId);
  saveCart();
}

export {
  getCartList,
  getCartItemsCount,
  getItemFromCart,
  addItemToCart,
  removeItemFromCart,
};
