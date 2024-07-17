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
function getItemFromCart(id) {
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i] === id) {
      return true;
    }
  }
  return false;
}
function addItemToCart(item) {
  cartList.unshift(item);
  saveCart();
}
function removeItemFromCart(item) {
  cartList = cartList.filter((i) => i !== item);
  saveCart();
}

export {
  getCartList,
  getCartItemsCount,
  getItemFromCart,
  addItemToCart,
  removeItemFromCart,
};
