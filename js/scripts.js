//Business Logic---------
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

Pizza.prototype.calculatePrice = function() {
  return 0;
}