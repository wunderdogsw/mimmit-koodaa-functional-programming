const lodash = require('lodash')
const booksInventory = require('../../data/books')

// Now, all object property manipulation happens inside a pure function.
// Also, this function doesn't depend on the imported value of booksInventory anymore
function addToShoppingCart(cart, inventory, idToAdd) {
  const clonedCart = lodash.cloneDeep(cart)

  if (clonedCart[idToAdd]) { // This book is already added to the cart
    clonedCart[idToAdd].count++
  } else {
    clonedCart[idToAdd] = lodash.cloneDeep(inventory[idToAdd])
    clonedCart[idToAdd].count = 1
  }

  return Object.freeze(clonedCart)
}

function removeFromCart(cart, idToRemove) {
  const clonedCart = lodash.cloneDeep(cart)
  if (!clonedCart[idToRemove]) {
    return Object.freeze(clonedCart)
  } else if (clonedCart[idToRemove].count === 1) {
    delete clonedCart[idToRemove]
  } else {
    clonedCart[idToRemove].count--
  }
  return Object.freeze(clonedCart)
}

function applyDiscount(cart, itemId, discountPercentage) {
  const clonedCart = lodash.cloneDeep(cart)
  clonedCart[itemId].price = (100 - discountPercentage) / 100 * clonedCart[itemId].price
  return Object.freeze(clonedCart)
}

// Imaginary shopper's trip through the store.
// The cart is an object, where books are stored so that the object id is the key,
// just like in the imported booksInventory object.
const cart0 = Object.freeze({})
const cart1 = addToShoppingCart(cart0, booksInventory,'book2')
const cart2 = addToShoppingCart(cart1, booksInventory,'book5')
const cart3 = applyDiscount(cart2,'book2', 25)
const cart4 = addToShoppingCart(cart3, booksInventory, 'book2')
const cart5 = removeFromCart(cart4, 'book5')

console.log(cart5)
console.log(booksInventory) // Yay, it's still the same object!
