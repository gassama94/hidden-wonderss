import axios from "axios";

axios.defaults.baseURL = 'https://hiddenwonderss-08d1e9391484.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true