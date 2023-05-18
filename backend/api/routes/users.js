//const router=require("express").Router();
//const {User,validate}= require("../models/user");
//const bcrypt=require("bcrypt");
//const Token = require("../models/token");
//const crypto = require("crypto");
//onst sendEmail = require("../utils/sendEmail");

import bcrypt from 'bcrypt';
import {User} from "../model/User.js";
import {validate} from '../model/User.js'
// import {User,validate} from "../models/user.js";
import crypto  from "crypto";
// import Token from './../model/token.js';
import Token from '../model/token.js';
import sendEmail from "../utils/sendEmail.js";
//import routerrequire("express").Router();
import express from 'express';
const router  = express.Router()

const EMAIL_URL =  'http://localhost:8080/api/';
const salt1 =10;

router.post("/",async(req,res)=>{
    try{
        console.log(req.body);
        // const{error}=validate(req.body);
        // if(error)
        //    return res.status(400).send({message:error.details[0].message});
        let user=await User.findOne({email:req.body.email});
        //checking for existing users
        if(user)
           return res.status(409).send({message:"User with given email already exist!"});
        const salt2=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(req.body.password,10);

        user = await new User({ ...req.body, password: hashPassword }).save();

		const token = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString("hex"),
		}).save();
        //verify the email link
		const url = `${EMAIL_URL}users/${user.id}/verify/${token.token}`;
		await sendEmail(user.email, "Verify Email", url);

		res.status(200).send({ message: "An Email sent to your account please verify" });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.get("/:id/verify/:token/", async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });
		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });
        console.log(token);
	//	await User.updateOne({ _id: user._id, verified: true });
        await User.findOneAndUpdate({_id: user._id},{verified: true});
		await token.remove();

		res.status(200).send({ message: "Email verified successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});
export default router;