const express = require("express");
const app = express();
const { Pool } = require("pg");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "video",
  password: "mulindI12",
  port: 5432,
});

// get all videos
app.get("/", (req, res) => {
  let order = req.query.order;
  let query = `select * from videos order by video_id ${order}`;
  if(order === undefined){
    query = `select * from videos order by video_id asc`;
  }
  pool
    .query(query)
    .then((data) => res.send(data.rows))
    .catch((error) => res.send(error));
});

// get video by id
app.get("/:id", (req, res) => {
  let id = req.params.id;
  let query = `select * from videos where videos.video_id = $1`;
  pool
    .query(query, [id])
    .then((data) => res.send(data.rows))
    .catch((error) => res.send(error));
});

// delete video by id
app.delete("/:id", (req, res) => {
  let id = req.params.id;
  let query = `delete from videos where videos.video_id = $1`;

  pool
    .query(query, [id])
    .then(() => res.send("video deleted"))
    .catch(() =>
      res.send({
        result: "failure",
        message: "Video could not be deleted",
      })
    );
});
// post video
app.post("/", (req, res) => {
  let url = req.body.url;
  let title = req.body.title;
  let query = `insert into videos(url, title) values($1,$2)`;
  pool
    .query(query, [url, title])
    .then(() => res.send("video created"))
    .catch((error) =>
      res.send({
        result: "failure",
        message: "Video could not be saved",
      })
    );
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
