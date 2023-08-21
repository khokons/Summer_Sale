
let total = 0;
let discount = 0; // Initialize the discount amount
const couponCode = "SELL200";

const couponButton = document.querySelector('#couponButton');
const purchaseButton = document.querySelector('#purchaseButton');

let itemCounter = 1;

function handleClickDiv(name) {
    const nameElement = name.childNodes[3].childNodes[3].innerText;
    const prices = name.childNodes[3].childNodes[5].innerText.split(' ')[0];

    const element = document.getElementById('Elements');
    const ol = document.createElement('ol');
   
    ol.innerText = `${itemCounter++}. ${nameElement}`;
    element.appendChild(ol);

    total = parseFloat(total) + parseFloat(prices);
    const totalTk = document.getElementById('total').innerText = total;

    // Check if the total is greater than or equal to 200 to enable the coupon button
    if (total >= 200) {
        couponButton.disabled = false;
    }

    else {
        couponButton.disabled = true;
    }

    // Check if the total is greater than 0 to enable the purchase button
    if (total > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
}

function applyCoupon() {
    const inputCoupon = document.getElementById('input_text').value;
    
    if (total >= 200 && inputCoupon === couponCode) {
        // Calculate the discount (20% of the total)
        discount = total * 0.2;
        
        // Update the discount element with the calculated discount
        const discountElement = document.getElementById('discount');
        discountElement.innerText = discount.toFixed(2);
        
        // Calculate the grand total after applying the discount
        const grandTotal = total - discount;
        
        // Update the grand total element with the calculated grand total
        const grandTotalElement = document.getElementById('grandTotal');
        grandTotalElement.innerText = grandTotal.toFixed(2);
        
        // Enable the Make Purchase button
        purchaseButton.disabled = false;
    }
}







