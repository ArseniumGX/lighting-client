import axios from 'axios'

axios.defaults.baseURL = 'https://reborn-api.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'Application/json'
