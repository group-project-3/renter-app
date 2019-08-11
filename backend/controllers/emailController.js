// calling gmail email api
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const users = require("./usersController")
require("dotenv").config();

const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
    }
});

module.exports = {
    sendWelcomeEmail: (userObject) => {
        console.log(userObject)

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: userObject.email_address,
            subject: "Welcome to Renter!",
            generateTextFromHTML: true,
            html: "<p>Welcome to Renter! You are now able to rent and post items!</p>"
        };

        smtpTransport.sendMail(mailOptions, (error, response) => {
            error ? console.log(error) : console.log(response);
            smtpTransport.close();
        });
    }
}