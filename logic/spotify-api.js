const axios = require("axios");
const qs = require("qs");
require("dotenv").config();

const client_id = process.env.SPOTIFY_API_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const auth_token = Buffer.from(`${client_id}:${client_secret}`).toString(
  "base64"
);

let showDetails = [];

const getAuth = async () => {
  try {
    const token_url = "https://accounts.spotify.com/api/token";
    const data = qs.stringify({ grant_type: "client_credentials" });

    const response = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${auth_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

const getPodcast = async (podcast_id) => {
  //request token using getAuth() function
  const access_token = await getAuth();

  const api_url = `https://api.spotify.com/v1/shows/${podcast_id}`;
  try {
    const response = await axios.get(api_url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const show = JSON.parse(JSON.stringify(response.data));

    const desc = show.description;
    const url = show.href;
    const lang = show.languages;
    const name = show.name;
    const publisher = show.publisher;
    const noe = show.total_episodes;

    showDetails.push(name, desc, publisher, lang, noe, url);
    return showDetails;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPodcast };
