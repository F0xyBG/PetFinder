const mysql = require('mysql');
const dbOpts = require("./config.js").dbOpts;

let Database = class {
    // Construct the database class and initialize a connection
    constructor() {
        this.con = mysql.createConnection(dbOpts);
    }

    // Get posts 
    getPosts() {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT * FROM `posts` WHERE `status` != "found"', function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    // Get single post
    getPost(post_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT * FROM `posts` WHERE `id` = ?', [post_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    // Get comments for post 
    getComments(post_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT * FROM `comments` WHERE `post_id` = ?', [post_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    // Insert new post
    insertPost(title, text, images, phone, name, category, status) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('INSERT INTO `posts` (`title`, `text`, `images`, `phone`, `name`, `category`, `status`) VALUES (?, ?, ?, ?, ?, ?, ?);', [title, text, images, phone, name, category, status], function (error, results, fields) {
                if (error) throw error;
                resolve(results.insertId);
            });
        });
        return promise;
    }

    // Make a new comment
    insertComment(post_id, comment_text, comment_images) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('INSERT INTO `comments` (`post_id`, `comment_text`, `comment_images`) VALUES (?, ?, ?);', [post_id, comment_text, comment_images], function (error, results, fields) {
                if (error) throw error;
                resolve(results.insertId);
            });
        });
        return promise;
    }

    // Delete a comment
    deleteComment(comment_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('DELETE FROM `comments` WHERE `id` = ?;', [comment_id], function (error, results, fields) {
                if (error) throw error;
                resolve("Comment deleted");
            });
        });
        return promise;
    }

    // Delete a post
    deletePost(post_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('DELETE FROM `posts` WHERE `id` = ?;', [post_id], function (error, results, fields) {
                if (error) throw error;
                resolve("Post deleted");
            });
        });
        return promise;
    }

    /*// Get posts 
    getPosts(spotify_artist_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT * FROM `posts`', [spotify_artist_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    // Get TOP10 artists
    getTopArtists(user_id = false) {
        if(user_id !== false){
            const promise = new Promise((resolve, reject) => {
                this.con.query('SELECT artists.name, COUNT(artists.id) as "artistListens" FROM `listenhistory` INNER JOIN tracks ON track_id = tracks.id INNER JOIN artists ON tracks.artist_id = artists.id WHERE`user_id` = ? GROUP BY artists.name ORDER BY artistListens DESC LIMIT 10; ', [user_id], function (error, results, fields) {
                    if (error) throw error;
                    resolve(results);
                });
            });
            return promise;
        } else {
            const promise = new Promise((resolve, reject) => {
                this.con.query('SELECT artists.name, COUNT(artists.id) as "artistListens" FROM `listenhistory` INNER JOIN tracks ON track_id = tracks.id INNER JOIN artists ON tracks.artist_id = artists.id GROUP BY artists.name ORDER BY artistListens DESC LIMIT 10;', function (error, results, fields) {
                    if (error) throw error;
                    resolve(results);
                });
            });
            return promise;
        }
    }

    // Count tracks
    countTracks(user_id = false) {
        if (user_id !== false) {
            const promise = new Promise((resolve, reject) => {
                this.con.query('SELECT COUNT(*) AS tracks FROM `listenhistory` WHERE `user_id`=?', [user_id], function (error, results, fields) {
                    if (error) throw error;
                    resolve(results);
                });
            });
            return promise;
        } else {
            const promise = new Promise((resolve, reject) => {
                this.con.query('SELECT COUNT(*) AS tracks FROM `listenhistory`', function (error, results, fields) {
                    if (error) throw error;
                    resolve(results);
                });
            });
            return promise;
        }
    }

    // Insert the new user
    insertUser(email, password) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('INSERT INTO `users` (`email`, `password`) VALUES (?, ?)', [email, password], function (error, results, fields) {
                if (error) throw error;
                resolve(results.insertId);
            });
        });
        return promise;
    }

    // Get or insert an album
    getOrInsertAlbum(albumName, DBArtistID, albumID, albumURI) {
        const promise = new Promise((resolve, reject) => {
            this.getAlbum(albumID)
            .then((album) => {
                if (album.length == 0) {
                    this.insertAlbum(albumName, DBArtistID, albumID, albumURI)
                    .then((insertedID) => {
                        resolve(insertedID);
                    })
                } else {
                    resolve(album[0].id);
                }
            })
        });
        return promise;
    }*/
}

module.exports = Database;