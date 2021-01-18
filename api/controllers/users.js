module.exports = () => {
  const axios = require('axios');
  const controller = {};
  const server = 'https://api.github.com';

  controller.listUsers = (req, res) => {
    const since = req.query.since
    const route = since ? (`/users?since=${since}`) : '/users'

    axios.get(server + route)
      .then(response => {
        const pageSize = response.data.length
        const next_page = `api/users?since=${response.data[pageSize-1].id}`
        res.status(200).json({ data: response.data, next_page })
      })
      .catch(error => {
        res.status(500).json(error)
      });
  }

  const fetchAndResponse = (route, res) => {
    axios.get(server + route)
      .then(response => {
        res.status(200).json({ data: response.data })
      })
      .catch(error => {
        res.status(500).json(error)
      });
  }

  controller.listUserDetails = (req, res) => {
    const username = req.params.username
    const route = `/users/${username}`

    fetchAndResponse(route, res)
  }

  controller.listUserRepos = (req, res) => {
    const username = req.params.username
    const route = `/users/${username}/repos`

    fetchAndResponse(route, res)
  }

  return controller;
}
