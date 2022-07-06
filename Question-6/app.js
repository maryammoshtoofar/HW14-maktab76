$(document).ready(function () {
  function addTodo() {
    const newTodo = $("<p></p>").text($("#todo").val());
    newTodo.attr("id", "task");
    newTodo.addClass("bg-white");
    $("#tasks").append(newTodo);
  }
  $("#addtodo").click(function (e) {
    e.preventDefault();
    addTodo();
  });

  $(document).on("click", "#task", function (e) {
    e.target.remove();
  });
});
