'use strict';

function masonryLayout() {
	const masonryContainerStyle = getComputedStyle(
		document.querySelector("div.posts")
	);
	const columnGap = parseInt(
		masonryContainerStyle.getPropertyValue("column-gap")
	);
	const autoRows = parseInt(
		masonryContainerStyle.getPropertyValue("grid-auto-rows")
	);

	document.querySelectorAll(".post-teaser").forEach((elt) => {
		elt.style.gridRowEnd = `span ${Math.ceil(
			elt.querySelector(".post-teaser-inner").getBoundingClientRect().height / autoRows + columnGap / autoRows
		)}`;
	});

	console.log(columnGap,autoRows)
}

masonryLayout();
window.addEventListener("resize", masonryLayout);
