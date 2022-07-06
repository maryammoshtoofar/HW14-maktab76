const API_URL = "https://62ac4e7dbd0e5d29af1fac5b.mockapi.io/api/todosList";
function getData() {
  const msg = $.ajax({ type: "GET", url: API_URL, async: false }).responseText;
  $("#res").text(msg);
}
$(document).ready(function () {
  $("#fetchbtn").click(function () {
    getData();
  });
});
