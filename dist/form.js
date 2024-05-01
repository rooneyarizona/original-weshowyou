$(document).ready(function() {
  $('#myForm').submit(function(e) {
      e.preventDefault(); // Prevent form submission

      // Get form data
      const formData = $(this).serialize();

      // Send POST request to server
      $.ajax({
          type: 'POST',
          url: '/dist/submit-form', // Endpoint on your server
          data: formData,
          success: function(response) {
              alert(response); // Show success message
          },
          error: function(err) {
              alert("An error has occurred!"); // Show error message
              console.error(err);
          }
      });
  });
});