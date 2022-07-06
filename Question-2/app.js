$(document).ready(function () {
  $("#toggle").click(function () {
    $(".container").toggle(function () {
      if ($("#toggle").text() === "Hide") {
        $("#toggle").text("Show");
      } else $("#toggle").text("Hide");
    });
  });
});
