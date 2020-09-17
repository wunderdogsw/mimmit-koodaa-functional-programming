let booksInventory = require('../data/books')

function addToShoppingCart(idToAdd) {
  if (cart[idToAdd]) { // This book is already added to the cart
    cart[idToAdd].count++
  } else {
    cart[idToAdd] = booksInventory[idToAdd]
    cart[idToAdd].count = 1
  }
}

function removeFromCart(idToRemove) {
  if (!cart[idToRemove]) {
    // Do nothing, no such item in cart
  } else if (cart[idToRemove].count === 1) {
    delete cart[idToRemove]
  } else {
    cart[idToRemove].count--
  }
}

function applyDiscount(itemId, discountPercentage) {
  cart[itemId].price = (100 - discountPercentage) / 100 * cart[itemId].price
}

// Imaginary shopper's trip through the store.
// The cart is an object, where books are stored so that the object id is the key,
// just like in the imported booksInventory object.
let cart = {}
addToShoppingCart('book2')
addToShoppingCart('book5')
applyDiscount('book2', 25)
addToShoppingCart('book2')
removeFromCart('book5')

console.log(cart)
console.log(booksInventory) // Oh no :(
