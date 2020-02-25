export function addCartRequest(id) {
  return { type: "ADD_CART_REQUEST", id };
}

export function addCartSuccess(product) {
  return { type: "ADD_CART_SUCCESS", product };
}

export function removeCart(id) {
  return { type: "REMOVE_CART", id };
}

export function updateAmountRequest(id, amount) {
  return { type: "UPDATE_AMOUNT_REQUEST", id, amount };
}

export function updateAmountSuccess(id, amount) {
  return { type: "UPDATE_AMOUNT_SUCCESS", id, amount };
}
