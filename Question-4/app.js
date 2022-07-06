$(document).ready(function () {
  $("#btn").click(function () {
    $("p").add($("span")).css({
      border: "5px dashed blue",
      "background-color": "yellow",
    });
  });
});
