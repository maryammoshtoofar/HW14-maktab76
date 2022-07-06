$(document).ready(function () {
  function showSerialized() {
    const str = $("form").serialize();
    $("#results").text(str);
  }
  $("#serialize").click(function (e) {
    e.preventDefault();
    showSerialized();
  });
});
