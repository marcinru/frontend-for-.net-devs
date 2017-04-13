const API = {
  getUsers: function() {
    let promise = $.Deferred();
    $.get('api/users.json', function(data) {
        promise.resolve(data);
    });
    return promise;
  },
  getTasks: function() {
    let promise = $.Deferred();
    $.get('api/tasks.json', function(data) {
        promise.resolve(data);
    });
    return promise;
  }
}
