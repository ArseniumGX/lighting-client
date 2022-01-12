import axios from 'axios'

axios.defaults.baseURL = 'https://lighting-api.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'Application/json'
