import axios from 'axios'

export const login = () => axios.get('http://localhost:5000/login')
    .then( res => res.data)
    .catch(err => console.error(err))