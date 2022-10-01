//import { ObjectId }  from 'mongoose'
import abstractionsDB from '../../infra/mongodb'

//const ObjectId = require('mongoose').Types.ObjectId

const AddressSchema = new abstractionsDB.Schema({
    identifier: { type: String },
    code: { type: String },
    state: { type: String },
    city: { type: String },
    neighborhood: { type: String },
    street: { type: String },
    number: { type: String },
    complement: { type: String },
    lat: { type: Number },
    lng: { type: Number },
    placeId: { type: String }
})

const PhoneSchema = new abstractionsDB.Schema({
    num: { type: String },
    identifier: { type: String }
})

const UserSchema = new abstractionsDB.Schema({
    // userId: { type:  ObjectId },
    name: { type: String, required: true },   
    email: { type: String, required: true, unique: true, index: true, lowercase: true },
    password: { type: String , required: true },
    age: { type: Number },
    phone: { type: PhoneSchema },
    emailVerificationToken: { type: String },
    newPasswordToken: { type: String, index: true },
    phoneNumberVerificationToken: { type: String },
    // companyID: { type: ObjectId, ref: 'companies' },
    logins: { type: [Date] },    
    token: { type: String },    
    status: { type: String }
    },
    { timestamps: true }
);

const User = abstractionsDB.model('User', UserSchema)

export default User


