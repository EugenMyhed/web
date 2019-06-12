const mongoose = require('mongoose');

const Schema = mongoose.Schema;
  
const UserSchema = new Schema({
    name       : { type : String },
    email      : { type : String },
    password   : { type : String },
    isAdmin    : { type : Boolean }
 });

 const InfoSchema = new Schema({
    title       : { type : String },
    description: { type : String },
 });

export const User = mongoose.model('User',UserSchema);
export const Post = mongoose.model('Post', InfoSchema) 
