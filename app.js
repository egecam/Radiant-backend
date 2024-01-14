const express = require("express");
const { getPodcast } = require("./logic/spotify-api");

const app = express();

const farkli_dusun = "3imVa0uYZnmgrqKHj3o8Sq";
const pop = "0TezKJDp9Z977SSZLSpMNo";
const meksika_acmazi = "1g3XuO31nyfA88ZdD8yWBP";
const stoikyasam = "12xYY9rBh4wLSADd02g6uH";
const bu_mu_yani = "5EIiOWjqVsr6WMvzZwjdxV";

let showName = "";
let showDesc = "";
let showPublisher = "";

const getDetails = async () => {
  try {
    let showDetails = await getPodcast(farkli_dusun);
    let showName = showDetails[0];

    showDetails = await getPodcast(meksika_acmazi);
    let showDesc = showDetails[1];

    showDetails = await getPodcast(stoikyasam);
    let showPublisher = showDetails[2];

    return { showName, showDesc, showPublisher };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
app.listen(3000, () => {
  console.log("server started");
});
