const theForm = document.querySelector('#checkoutForm');

function isCardNumberValid(number) {
  return number === '1234123412341234'
}

function displayError(msg) {
  // display error message
  document.querySelector('.errors').textContent = msg
}

function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';
  displayError('');

  let cardNumber = document.querySelector('#card_number');
  const cardNum = cardNumber.value.trim();

  // Check for card number length and validity
  if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits.\n';
  } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid.\n';
  }

  // Check expiration date
  const expYear = Number(document.querySelector('#year').value);
  const expMonth = Number(document.querySelector('#month').value);
  const currentDate = new Date()

  if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
  ) {
    errorMsg += 'Card is expired.\n';
  }

  if (errorMsg !== '') {
    // there was an error. stop the form and display the errors.
    displayError(errorMsg)
    return;
  }
  // Success: show a confirmation message
  const formContainer = document.getElementById('form');
  formContainer.innerHTML = '<h2>Thank you for your purchase! Have a great day.</h2>';
}

theForm.addEventListener('submit', submitHandler)