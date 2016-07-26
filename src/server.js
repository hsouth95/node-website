'use strict';

var express = require('express'),
    stylus = require('stylus'),
    nib = require('nib');

const app = express();

/**
 * Build the css pre-processor
 */
function compile(str, path) {
    return stylus(str)
            .set("filename", path)
            .use(nib());
}

app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.use(express.logger("dev"));
app.use(stylus.middleware({
    src: __dirname + "/public",
    compile: compile
}));
app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
    res.render("index", {
        title: "Home"
    })
});

app.listen(process.env.PORT || 80, function() {
    console.log('Running on http://localhost:' + (process.env.PORT || 80));
});
