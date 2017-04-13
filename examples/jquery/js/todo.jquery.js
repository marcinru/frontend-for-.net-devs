$(function () {
  $.get('api/tasks.json', function (data) {
    let tasks = document.createDocumentFragment();
      console.log(data);
  });

  $.get('api/users.json', function (data) {
      console.log(data);
  });

  $('#username').change(function () {
    let username = $(this).find('option:selected').text();
    $('#current-user').text(username);
  });

  $('#add-todo-form').submit(function (event) {
    event.preventDefault();
    let taskName = $('#task-name').val(),
        username = getUserName();
    $('#tasks-list').append(`<li class="list-group-item">
      <span class="badge">${username}</span>
      <label><input type="checkbox">${taskName}</label>
    </li>`);
    this.reset();
  });

  $('#tasks-list').on('change', 'input[type=checkbox]', function () {
    $(this).closest('.list-group-item').remove();
  });

  function getUserName() {
    const defaultUser = "Marcin";
    let username = $('#username').val();
    return username === "all" ? defaultUser : username;
  }
});
