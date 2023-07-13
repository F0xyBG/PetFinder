const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const Database = require('./database.js');
const db = new Database();
const multer = require('multer');
const path = require('path');
const cors = require("cors");


// Use CORS policy
app.use(cors());

//use express static folder
app.use(express.static("./public"))

// body-parser middleware use
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json
app.use(bodyParser.json())

app.get('/test', (req, res) => {
  res.send('gosho ne stava')
})

//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './images/')     // './images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
});

//! Routes start

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
app.get("/images/:filename", (req, res) => {
    res.sendFile(__dirname + "/images/" + req.params.filename);
});

//API endpoint for getting all comments for a post
app.get("/comments/:post_id", (req, res) => {
    db.getComments(req.params.post_id).then((val) => {
        res.json(val);
    });
});

//API endpoint for uploading a post
app.post("/postUpload", upload.single('image'), (req, res) => {
    var host = req.get('host');
    let img = "http://localhost:3000/images/" + req.file.filename;
    db.insertPost(req.body.title, req.body.text, img, req.body.phone, req.body.name, req.body.category, req.body.status, req.body.location).then((val) => {
        res.redirect(host);
    })
});

//API endpoint for making a comment
app.post("/makeComment", (req, res) => {
    var host = req.get('host');
    db.insertComment(req.body.post_id, req.body.phone, req.body.name, req.body.comment_text).then((val) => {
        res.redirect(host);
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