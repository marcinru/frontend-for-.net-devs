const API = {
  getUsers: function() {
    let promise = $.Deferred();
    $.get('api/users.json', data => { promise.resolve(data) });
    return promise;
  },
  getTasks: function() {
    let promise = $.Deferred();
    $.get('api/tasks.json', data => { promise.resolve(data) });
    return promise;
  }
};
