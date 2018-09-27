$(function () {

    $(document).on("click", "#submit", function (event) {
        event.preventDefault();
        var name = $("#burger").val().trim();
        $.post("/burgers/add", {
            name: name,
            devourved: false
        }, function () {
            $("#burger").val("");
        });
    });

    $(".devour-form").on("submit", function(event) {
        event.preventDefault();
      
        var burger_id = $(this).children(".burger_id").val();
        $.ajax({
          method: "PUT",
          url: "/burgers/update/" + burger_id
        }).then(function(data) {
          location.reload();
        });
      
      });
});
