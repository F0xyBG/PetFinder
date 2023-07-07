const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
const Database = require('./database.js');
const db = new Database();

// parse application/json
app.use(bodyParser.json())

app.get('/test', (req, res) => {
  res.send('gosho ne stava')
})

//API endpoint for getting all posts
app.get("/posts", (req, res) => {
    db.getPosts().then((val) => {
        res.json(val);
    });
});

//API endpoint for getting single post
app.get("/post/:post_id", (req, res) => {
    db.getPost(req.params.post_id).then((val) => {
        res.json(val);
    });
});

//API endpoint for getting all comments for a post
app.get("/comments/:post_id", (req, res) => {
    db.getComments(req.params.post_id).then((val) => {
        res.json(val);
    });
});

//API endpoint for uploading a post
app.post("/postUpload", (req, res) => {
    db.insertPost(req.body.title, req.body.text, req.body.images, req.body.phone, req.body.name, req.body.category, req.body.status).then((val) => {
        res.json(val);
    })
});

//API endpoint for deleting a comment
app.delete("/deleteComment", (req, res) => {
    db.deleteComment(req.body.comment_id).then((val) => {
        res.json(val);
    })
});

//API endpoint for deleting a post
app.delete("/deletePost", (req, res) => {
    db.deletePost(req.body.post_id).then((val) => {
        res.json(val);
    })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})