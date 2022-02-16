---
layout: post
title: Memo - Gulp
feature-img: "assets/img/pexels/computer2.jpeg"
thumbnail: "assets/img/thumbnails/feature-img/gulp.jpg"
tags: [gulp, css, scss, verderprefix]

---

## CSS, Scss 
   [gulp] : 작성한 css 파일 내에 주석 삭제 cleanCSS
    
```javascript
gulp.task('comment-delect', () => {
	return gulp.src(file_paths.folder + '*.css')
		.pipe(cleanCSS({
			compatibility: 'ie8' ,
			format: {
				breaks: {
					afterAtRule: false,
					afterBlockBegins: true,
					afterBlockEnds: true,
					afterComment: true,
					afterProperty: false,
					afterRuleBegins: false,
					afterRuleEnds: true, /*  */
					beforeBlockEnds: true,
					betweenSelectors: false
				},
				breakWith: '\\r\\n',
				indentBy: 0,
				indentWith: 'tab',
				spaces: {
					aroundSelectorRelation: false,
					beforeBlockBegins: false,
					beforeValue: false
				},
				wrapAt: false
			},
			level: {
				2: {
					mergeAdjacentRules: true,
					mergeIntoShorthands: true,
					mergeMedia: true,
					mergeNonAdjacentRules: true,
					mergeSemantically: true,
					overrideProperties: false,
					removeEmpty: true,
					reduceNonAdjacentRules: true,
					removeDuplicateFontRules: true,
					removeDuplicateMediaBlocks: false,
					removeDuplicateRules: true,
					removeUnusedAtRules: false,
					restructureRules: false,
					mergeMediaQueries: true
				}
			}
		}))

		.pipe(gulp.dest(file_paths.folder));
});
```

[gulp] : 작성한 css 파일 autoprefix

```javascript
gulp.task('autoprefix-css', () => {
	return gulp.src(file_paths.css)
		.pipe(sourcemaps.init())
		.pipe(autoprefixer({
			browsers:["last 6 version", "IE 8", "> 0.5%", "Android >= 4", "Firefox >= 16", "iOS >= 8", "opera 48"], cascade:false
		}))
		.pipe(rename({
			prefix: "converted-",
			extname: ".css"
		}))
		.pipe(gulp.dest(file_paths.folder));
});
```

