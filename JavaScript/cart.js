/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.getElementById('tbody').deleteRow('tr')
}


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // localStorage.getItem('items')
  // var cartTable = document.getElementById('cart')
  // if (localStorage.) {
  var allItemsString = localStorage.getItem('items');
  var allItemsData = JSON.parse(allItemsString);
  for (var i = 0; i < Cart.length; i++) {
  var tr = document.createElement('tr');
  var deleteLink = document.createElement('td');
  var deleteQuantity = document.createElement('td');
  var deleteItem = document.createElement('td');
  tr.appendChild(deleteItem);
  tr.appendChild(deleteQuantity);
  tr.appendChild(deleteLink);
  allItemsData.appendChild(tr);
 }
}



  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR



function removeItemFromCart(event) {
  var deleteItem = event.cart.removeItem('click');
  var table = document.getElementById('cart');
  localStorage.setItem('cart', JSON.stringify(table));
  table.innerHTML = "";
  table.render();

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();