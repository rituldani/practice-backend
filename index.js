import express from "express"
import dotenv from "dotenv"

const app = express()
dotenv.config()
const port = process.env.PORT
const gitData = {
  "login": "rituldani",
  "id": 100018102,
  "node_id": "U_kgDOBfYntg",
  "avatar_url": "https://avatars.githubusercontent.com/u/100018102?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rituldani",
  "html_url": "https://github.com/rituldani",
  "followers_url": "https://api.github.com/users/rituldani/followers",
  "following_url": "https://api.github.com/users/rituldani/following{/other_user}",
  "gists_url": "https://api.github.com/users/rituldani/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rituldani/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rituldani/subscriptions",
  "organizations_url": "https://api.github.com/users/rituldani/orgs",
  "repos_url": "https://api.github.com/users/rituldani/repos",
  "events_url": "https://api.github.com/users/rituldani/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rituldani/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Ritul Dani",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2022-02-19T08:13:59Z",
  "updated_at": "2025-06-02T11:50:56Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1> Login here </h1>')
})

app.get('/github', (req, res) => {
  res.json(gitData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})