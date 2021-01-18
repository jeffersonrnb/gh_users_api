const cors = require('cors')

module.exports = app => {
  const controller = app.controllers.users

  app.use(cors())

  app.route('/api/users').get(controller.listUsers);
  app.route('/api/users/:username/details').get(controller.listUserDetails);
  app.route('/api/users/:username/repos').get(controller.listUserRepos);
}
