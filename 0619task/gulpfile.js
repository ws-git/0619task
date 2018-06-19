var gulp = require('gulp');

var server = require('gulp-webserver');

var path = require('path');

var fs = require('fs');

var url = require('url');

var sass = require('gulp-sass');

var datajson = require('./data/data.json');

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8080,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return false;
                } else if (pathname === '/api/src') {
                    res.end(JSON.stringify(datajson));
                } else {
                    pathname = pathname === '/' ? '/index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }))
})