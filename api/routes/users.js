module.exports = app => {
  const controller = app.controllers.users

  app.route('/api/users').get(controller.listUsers);
  app.route('/api/users/:username').get(controller.listUserDetails);
  app.route('/api/users/:username/repos').get(controller.listUserRepos);
}
