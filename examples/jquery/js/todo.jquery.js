$(function () {
    const $tasksList = $('#tasks-list');

    $tasksList.on('change', 'input[type=checkbox]', function () {
        $(this).closest('.list-group-item').remove();
    });

    $.when(API.getUsers(), API.getTasks()).then(function (users, tasks) {
        let taskList = document.createDocumentFragment(),
            usersArray = [];
        for (var i = 0; i < users.length; i++) {
            usersArray[users[i].id] = users[i].name;
        }
        tasks.forEach(function (task) {
            $(taskList).append(`<li class="list-group-item">
                  <span class="badge">${usersArray[task.userId]}</span>
                  <label><input type="checkbox"> ${task.name}</label>
              </li>`);
        });
        $tasksList.append(taskList);
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
          <label><input type="checkbox"> ${taskName}</label>
        </li>`);
        this.reset();
    });

    function getUserName() {
        const defaultUser = "Marcin";
        let username = $('#username').val();
        return username === "all" ? defaultUser : username;
    }
});
