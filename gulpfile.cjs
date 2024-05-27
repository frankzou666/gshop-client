var gulp= require("gulp")
var shell   = require('gulp-shell');

//build vite
gulp.task("build", gulp.series(shell.task(["npm run build"])))
gulp.task("changeDistRoot", gulp.series(shell.task(["chmod -R 777 dist/*"])))


//replace index.html
//gulp.task("replaceIndexHTML", gulp.series(shell.task(["cp index-prod.html dist/index.html"])))

gulp.task("default",gulp.series(["build","changeDistRoot"]))