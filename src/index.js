// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity');
  let priceValue = Number(price.innerHTML);
  let quantityValue = quantity.querySelector('input').value;
  let subTotalPrice = (priceValue*quantityValue).toFixed(2);
  const subTotalElement = product.querySelector('.subtotal span')
  subTotalElement.innerHTML = subTotalPrice;

  
  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName('product');
  let total = 0;
  for (i=0; i<products.length;i++) {
    console.log("total = ", total);
    let increment = Number(updateSubtotal(products[i]));
    console.log("increment = ", increment);
    total += increment;
  };
  //... your code goes here

  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total.toFixed(2);
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
  
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const inputs = document.querySelector('.create-product');
  const inputElements = inputs.querySelectorAll('input');
  const productName = inputElements[0].value;
  const priceValue = inputElements[1].value;
  let newProduct = document.createElement("tr");
  newProduct.className = 'product';
  newProduct.innerHTML = `<td class="name">
          <span>${productName}</span>
          </td>
          <td class="price">$<span>${priceValue}</span></td>
          <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
          <button class="btn btn-remove">Remove</button>
          </td>`
  let parent = document.querySelector('tbody');
  parent.appendChild(newProduct);
  inputElements[1].value = 0;
  inputElements[0].value = '';

  const removeButtons = document.querySelectorAll('.btn.btn-remove');
  removeButtons[removeButtons.length-1].addEventListener('click', removeProduct);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('.btn.btn-remove');
  for (i=0;i<removeButtons.length;i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
  //... your code goes here
});
