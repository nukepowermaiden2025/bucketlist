// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-complete").on("click", function(event) {
      var id = $(this).data("id");
      var newComplete = $(this).data("newcomplete");
  
      var newCompleteState = {
        complete: newComplete
      };
  
      // Send the PUT request.//put requires that I send and object
      $.ajax("/api/bucketItems/" + id, {
        type: "PUT",
        data: newCompleteState
      }).then(
        function() {
          console.log("changed complete to", newComplete);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
        //This is a new object that I am using to
        //get form data and make a Post request to the 
        // /api/bucketItems routes' object array.
        //Then I am telling the page to load it to the DOM
      var newComplete = {
        bucketItem_name: $("#item").val().trim(),
        complete: $("[name=complete]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/bucketItems", {
        type: "POST",
        data: newComplete
      }).then(
        function() {
          console.log("created new bucket item");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-bucketItem").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/bucketItems/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted bucket item", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  