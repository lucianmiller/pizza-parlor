//Business Logic---------
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

Pizza.prototype.calculatePrice = function() {
  if (this.size === 1) {
    this.price += 5;
  } else if (this.size === 2) {
    this.price += 7;
  } else {
    this.price += 10;
  };
  if (this.topping === 1) {
    this.price += 2;
  } else if (this.topping === 2) {
    this.price += 4;
  } else if (this.topping === 3) {
    this.price += 6;
  } else {
    this.price += 8;
  };
}

//UI logic---------------
function showPrice(price) {
  $("#show-price").show();
  $("#total-price").html("$" + price.toFixed(2));
}

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    const selectedSize = parseInt($("#size").val());
    const selectedTopping = parseInt($("#toppings").val());

    $("input#size").val("");
    $("input#toppings").val("");

    let userOrder = new Pizza(selectedSize, selectedTopping)
    userOrder.calculatePrice();
    showPrice(userOrder.price);
  });
});