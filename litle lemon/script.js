function submitForm() {
    // You can perform additional validation or processing here before submission
    alert('Reservation submitted successfully!');
  
    // Clear the form after submission
    clearForm();
  
    // Prevent the default form submission
    return false;
  }
  
  function clearForm() {
    // Get all input and textarea elements inside the form
    var formElements = document.getElementById('reservationForm').elements;
  
    // Loop through each form element and reset its value
    for (var i = 0; i < formElements.length; i++) {
      if (formElements[i].type !== 'submit') {
        formElements[i].value = '';
      }
    }
  }
;  