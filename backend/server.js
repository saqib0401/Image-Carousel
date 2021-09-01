import express from "express";
import { createApi } from "unsplash-js";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

import dotenv from "dotenv";
dotenv.config();

global.fetch = fetch;
const PORT = process.env.PORT || 5000;
const unsplash = createApi({
  accessKey: process.env.API_KEY,
});

app.get("/", (req, res) => {
  res.send("Api is running");
});

// app.get("/api/:categories", (req, res) => {
//   res.send("You have requested the category of " + req.params.categories);
// });

app.get("/api/:categories", (req, res) => {
  let photos = [];
  let numOfImg = 10;
  unsplash.search
    .getPhotos({
      query: `${req.params.categories}`,
      page: 1,
      perPage: numOfImg,
    })
    .then((result) => {
      if (result.errors) {
        // handle error here
        console.log("error occurred: ", result.errors[0]);
      } else {
        // handle success here
        for (let i = 0; i < numOfImg; i++) {
          photos.push(result.response.results[i].urls.raw + "&w=400");
        }

        // console.log(photos);
      }
      res.json(photos);
    });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
