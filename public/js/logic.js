$(function () {

    $(window).on("click", "#submit", function (event) {
        event.preventDefault();
        let name = $("#burger").val().trim();
        $.post("/new", {
            name: name,
            devourved: false
        }, function () {
            console.log("Post request sent.");
            $("#burger").val("");
        });
    });

    $(window).on("click", "#devour", function (event) {
        event.preventDefault();
        $.put("/update", {
            name: this.name,
            devourved: true
        }, function () {
            console.log("Put request sent.");
        });
    });
});
