$(function () {
  $('#username').change(function () {
    let username = $(this).find('option:selected').text();
    $('#current-user').text(username);
  })
})
