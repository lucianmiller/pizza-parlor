//Business Logic---------
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.calculatePrice = function() {
  if (this.size === 1) {
    this.price += 5;
  } else if (this.size === 2) {
    this.price += 7;
  } else {
    this.price += 10;
  };
  this.price += (this.toppings.length * 0.5);
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

    let userOrder = new Pizza(selectedSize)

    $("input:checkbox[name=toppings]:checked").each(function(){
      const toppingsList = $(this).val();
      userOrder.addTopping(toppingsList);
    });

    $("input#size").val("");
    $("input#toppings").val("");

    userOrder.calculatePrice();
    showPrice(userOrder.price);
  });
});