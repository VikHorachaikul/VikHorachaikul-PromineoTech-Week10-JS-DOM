$(document).ready(function() {
    // Handle form submission
    $('#add-form').submit(function(event) {
      event.preventDefault();
  
      // Get the form values
      var name = $('#name').val();
      var email = $('#email').val();
  
      // Create a new table row
      var newRow = '<tr><td>' + name + '</td><td>' + email + '</td></tr>';
  
      // Append the new row to the table body
      $('#table-body').append(newRow);
  
      // Reset the form
      $('#add-form')[0].reset();
    });
  });
  