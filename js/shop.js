// Wait for page to be ready 

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)

} else {
  ready()
} 

function ready(){

  var addToCartButtons = document.getElementsByClassName('shop-item-button');

  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addCartItem)       
  } 

  var removeCartItemButtons = document.getElementsByClassName('btn-danger');

  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)       
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input');

  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }
//add listener for purchase button click
  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function updateCartTotal() {
// find div wrapping all the cart items 
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
// collect cart row data
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0

  for (var i = 0; i < cartRows.length; i++) {
// start at row 1
      var cartRow = cartRows[i]
// obtain quantity        
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var quantity = quantityElement.value
// obtain price as a float with no prefix for "rands"
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var price = parseFloat(priceElement.innerText.replace('R', ''))
// calculate total 
      total = total + (price * quantity)
  }
// display calculated total with "rands" prefix   
  document.getElementsByClassName('cart-total-price')[0].innerText = 'R' + total
}

function addCartItem(event) {
// obtain  specific shop item via button clicked within its divs
  var button = event.target
  var shopItem = button.parentElement.parentElement

  var imageSource = shopItem.getElementsByClassName('shop-item-image')[0].src 
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  
  createCartRow(imageSource, title, price)
  updateCartTotal()
}

function createCartRow (imageSource, title, price) {
// create new div with class 'cart-row' for styling
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')

  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
// prevent duplication of cart items by cross checking cart-item-title being added to all cart items 
  for (i = 0; i < cartItemNames.length; i++) {
// alert and cancel cart row creation 
      if (cartItemNames[i].innerText == title) {
          alert('Already added previously'); 
          return;
      }
  }
// give reactive content to newly created div
  var cartRowContents = ` 
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${imageSource}" width="6.25em" height="6.25em">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">REMOVE</button>
  </div>`
  cartRow.innerHTML = cartRowContents
// append div filled with content, thats been checked for repitition to cart rows
  cartItems.append(cartRow)
// add event Listeners to newly created buttons that werent apart of html at time of page loading
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

// remove entire cart row
function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

// prevent negative orders or unreal oders
function quantityChanged(event){
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}

// at time of purchase alert user and clear cart
function purchaseClicked() {
  alert('Thank you for buying our furniture')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn, #myDropdown, .cart-quantity-input, .btn-danger')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

