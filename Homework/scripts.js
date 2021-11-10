let productName;
let quantity;
let price;
let total;
let subTotal;

productName = prompt('Product name: ');
quantity = prompt('Quatity: ');
price = prompt('Price: ');


subTotal = (quantity * price);
taxes = (subTotal * .065);
total = (taxes + subTotal);


console.log
(`
  Product Name: ${productName}
  \nQuantity: ${quantity}
  \nPrice: ${price}
  \nsubtotal: ${subTotal}
  \ntaxes: ${taxes}
  \ntotal: ${total}
`)



document.write
(`

<div class="container">
<p class="receipt" >Receipt: </p>
<p> Product Name: ${productName}</p>
<p>Quantity: ${quantity}</p>
<p>Price: $${price}</p>
<p>subtotal: $${subTotal}</p>
<p>taxes: $${taxes}</p>
<p>total: $${total}</p>
`)
