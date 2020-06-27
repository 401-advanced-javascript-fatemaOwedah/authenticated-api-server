'use strict';
/**
 * @module OAuth
 * @requires dotenv
 * @requires superagent
 * @requires users-model
 */
require('dotenv').config();
const Users = require('../models/users-model');
const superagent = require('superagent');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const tokenServerUrl = 'https://github.com/login/oauth/access_token';
const remoteUserApi = 'https://api.github.com/user';

const API_SERVER = 'https://authenticated-api-server-lab15.herokuapp.com/oauth'; 


module.exports = async (req, res, next)=> {
  try {
    let code = req.query.code;
    console.log(code);

    let remoteToken = await exchangeCodeForToken(code);

    let remoteUser = await getRemoteUserInfo(remoteToken);

    let [user , token] = await getUser(remoteUser);
    req.user = user; 
    req.token = token;
    

    next();

  } catch (e) {
    console.log(`ERROR: ${e}`);
    next('error');
  }

};

/**
 * @function exchangeCodeForToken
 * @param {string} code This is the retrieved code from github after a user signs in.
 * @property {string} client_id This is the client ID that was given in the github app.
 * @property {string} client_secret This is the client secret that was given in the github app.
 * @property {string} redirect_uri This is where the token will be redirected to.
 * @property {string} code This is the code that was given to us from github after the user logged in.
 * @description After a user logs in, we post to the github token URL with properties so we can get a token back
 * @returns {string} It returns an access token that can be used to access user information from github.
 */
async function exchangeCodeForToken(code) {
  let tokenResponse = await superagent.post(tokenServerUrl).send({
    client_id : CLIENT_ID,
    client_secret : CLIENT_SECRET, 
    redirect_uri: API_SERVER,
    code: code,
  });
  let access_token = tokenResponse.body.access_token;
  return access_token;
}
/**
 * @function getRemoteUserInfo
 * @param {string} token we take it from github after login.
 * @returns {string} It returns the user.
 */
async function getRemoteUserInfo(token) {
  let userResponse = await superagent
    .get(remoteUserApi)
    .set('Authorization', `token ${token}`)
    .set('user-agent', 'express-app');

  let user = userResponse.body;
  return user;
}
/**
 * @function getUser
 * @param {string} remoteUser
 * @returns {object} It returns [savedUser, myServerToken].
 */
async function getUser(remoteUser) {
  let userRecord = {
    username: remoteUser.login,
    password: 'oauthpassword',
  };
  let users = new Users(userRecord);
  let savedUser = await users.save();
  let myServerToken = users.generateToken(userRecord);
  return [savedUser, myServerToken];
}