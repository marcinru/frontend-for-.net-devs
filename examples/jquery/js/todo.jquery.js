$(function () {
  $('#username').change(function () {
    let username = $(this).find('option:selected').text();
    $('#current-user').text(username);
  });

  $('#add-todo-form').submit(function (event) {
    event.preventDefault();
    let taskName = $('#task-name');
    console.log(taskName.val());
  })
})
