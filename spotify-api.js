const axios = require("axios");
const qs = require("qs");
require("dotenv").config();

const client_id = process.env.SPOTIFY_API_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const auth_token = Buffer.from(`${client_id}:${client_secret}`).toString(
  "base64"
);

let showDetails = [];
