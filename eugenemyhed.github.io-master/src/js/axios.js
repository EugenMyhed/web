import axios from './axiosDefault'

export function CreateUser(UserData)
{
    return axios.post('http://localhost:5000/signup',{name:UserData.name,email:UserData.email,password:UserData.password, isAdmin:UserData.isAdmin})
}

export function CreatePost(postData)
{
    return axios.post('http://localhost:5000/postInfo',{title: postData.title, description: postData.description})
}

export function deletePost(id)
{
    return axios.delete(`http://localhost:5000/postInfo/${id}`)
}

