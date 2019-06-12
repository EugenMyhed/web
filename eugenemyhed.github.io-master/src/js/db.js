import {User, Post} from './schemas';
import mongoose from 'mongoose';

export const SetUpConnection = () =>
{
    mongoose.connect('mongodb://localhost:27017/users',{ useNewUrlParser: true },() =>{
        console.log('ok')
    });
}
export function GetUsers(req,res)
{
    User.find().then((err,posts)=>{
        if(err)
            res.send(err)
        res.json(posts)
    })
}
export function AddUser (req,res)
{
  const data = req.body;
  const post = new User({
    name:data.name,
    email:data.email,
    password:data.password,
    isAdmin:data.isAdmin

  })
  post.save().then(()=> {
    res.send('OK')
  })
}

export function AddPost (req,res)
{
  const data = req.body;
  const post = new Post({
    title:data.title,
    description:data.description,
  })

  post.save().then(()=> {
    res.send('OK')
  })
}

export function GetPost(req,res)
{
    Post.find().then((err,posts)=>{
        if(err)
            res.send(err)
        res.json(posts)
    })
}
export function DeletePost(req,res)
{
    Post.remove({
        _id:req.params.id
    }).then(()=> console.log('deleted'))
}