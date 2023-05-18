// //onst router=require("express").Router();
// const{User}=require("../models/user");
// const Token=require("../models/token");
// const crypto = require("crypto");
// const sendEmail = require("../utils/sendEmail");
// const Joi=require("joi");
// const bcrypt=require("bcrypt");


import bcrypt from 'bcrypt';
import {User} from '../model/User.js'
import crypto  from "crypto";
import Token from '../model/token.js'
import sendEmail from "../utils/sendEmail.js";
import Joi from "joi";
import express from 'express';
const authRoutes  = express.Router()

authRoutes.post("/",async(req,res)=>{
    try {
         const{error}=validate(req.body);
         console.log(error);
         if(error)
           return res.status(400).send({message:error.details[0].message});
         const user=await User.findOne({email:req.body.email});
         //if user enter invalid email 
         if(!user)
            return res.status(401).send({message:"Invalid Email or Password"});

         const validPassword=await bcrypt.compare(
            req.body.password,user.password
         );
         // if user enter invalid password
         if(!validPassword)
           return res.status(401).send({message:"Invalid Email or Password"});
           //To verify the user email
         if(!user.verified) 
         {
          let token = await Token.findOne({ userId: user._id });
			if (!token) {
				token = await new Token({
					userId: user._id,
					token: crypto.randomBytes(32).toString("hex"),
				}).save();
				const url = `${process.env.EMAIL_URL}/api/users/${user._id}/verify/${token.token}`;
        console.log(url);
				await sendEmail(user.email, "Verify Email", url);
			}

			return res
				.status(200)
				.send({ message: "An Email sent to your account please verify" });
         
      }

        //Successful login after email verification
        const token=user.generateAuthToken();
        
        res.status(200).send({data:token,message:"Logged in successful"});
        } catch (error) {
            res.status(500).send({message:"Internal server Error"});
         
    }
})
// validate given email and password
const validate=(data)=>{
  console.log('validate');
    const schema=Joi.object({
        email:Joi.string().email().required().label("Email"),
        password:Joi.string().required().label("Password")

    });
    return schema.validate(data);
}
export default authRoutes;

