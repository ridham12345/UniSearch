// sending verification mail using nodemailer


//const nodemailer = require("nodemailer");

import nodemailer from 'nodemailer';

const sendEmail = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			
			service:"gmail",
			auth: {
				user:"sruchithra2000@gmail.com",
                pass:"nvrdcbwyyyaixjdd"
			},
		});

		await transporter.sendMail({
			from: process.env.USER,
			to: email,
			subject: subject,
			text: text,
		},function (err, data) {

            if (err) {

                console.log(err);

            } else {

                console.log('Email sent successfully', data);

            }

        });
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};

export default sendEmail;